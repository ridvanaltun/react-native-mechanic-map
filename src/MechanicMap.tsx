import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { Platform } from 'react-native';
import { WebView, type WebViewMessageEvent } from 'react-native-webview';
import type {
  WebViewErrorEvent,
  WebViewHttpErrorEvent,
  WebViewRenderProcessGoneEvent,
} from 'react-native-webview/lib/WebViewTypes';

import { LocationTypes, MapActions, MapResponses } from './mapEnums';
import { parseMapWebViewMessage } from './parseMapWebViewMessage';
import type {
  MechanicMapHandle,
  MechanicMapProps,
  PostMessagePayload,
  StartNavigationProgram,
} from './types';

function reportBridgeFailure(
  onMapError: MechanicMapProps['onMapError'],
  message: string,
  error: string,
  source = 'react-native-webview'
) {
  onMapError?.({
    message,
    source,
    lineno: 0,
    colno: 0,
    error,
  });
}

function createBridgeRequestId(): string {
  try {
    const g = global as { crypto?: { randomUUID?: () => string } };
    if (g.crypto?.randomUUID) {
      return g.crypto.randomUUID();
    }
  } catch {
    /* ignore */
  }
  return `rn-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
}

const MechanicMap = forwardRef<MechanicMapHandle, MechanicMapProps>(
  (
    {
      languageCode = 'en',
      disableAutoInit = false,
      payload,
      options = {},
      onEvent,
      onLevelSwitched,
      onLocationOpened,
      onLocationClosed,
      onMapLoaded,
      onNavigationCancelled,
      onLocationHighlighted,
      onLevelsReady,
      onLevelReady,
      onNavigationState,
      onBeaconClicked,
      onPositionChanged,
      onSingleLocationHighlighted,
      onTooltipNavigationClick,
      onTooltipDetailClick,
      onTooltipEnterBuildingClick,
      onTooltipCloseClick,
      onMapError,
      onError: onWebViewErrorProp,
      onHttpError: onHttpErrorProp,
      onRenderProcessGone: onRenderProcessGoneProp,
      ...props
    },
    ref
  ) => {
    const webViewRef = useRef<WebView>(null);
    const bridgePendingRef = useRef(
      new Map<
        string,
        { resolve: (v: unknown) => void; reject: (e: Error) => void }
      >()
    );

    const postMessage = (message: PostMessagePayload) => {
      const messageStr = JSON.stringify(message);
      webViewRef.current?.postMessage(messageStr);
    };

    function bridgeCall<T>(
      command: MapActions,
      cmdPayload: Record<string, unknown> = {}
    ): Promise<T> {
      const requestId = createBridgeRequestId();
      return new Promise<T>((resolve, reject) => {
        bridgePendingRef.current.set(requestId, {
          resolve: (v: unknown) => resolve(v as T),
          reject,
        });
        postMessage({
          action: command,
          payload: { ...cmdPayload, requestId },
        });
      });
    }

    useImperativeHandle(ref, () => ({
      postMessage(params) {
        postMessage(params);
      },
      init(params) {
        postMessage({
          action: MapActions.INIT,
          payload: {
            language: params.languageCode || 'en',
            levels: params.payload,
            options: params.options || {},
          },
        });
      },
      showLocation({
        id,
        type,
        duration = true,
        closeNavigation = true,
        moveAndZoom = true,
      }) {
        postMessage({
          action: MapActions.SHOW_LOCATION,
          payload: {
            id,
            type,
            duration,
            closeNavigation,
            moveAndZoom,
          },
        });
      },
      closeNavigation(resetLevel = true) {
        postMessage({
          action: MapActions.CLOSE_NAVIGATION,
          payload: {
            resetLevel,
          },
        });
      },
      showNavigation(route, params) {
        postMessage({
          action: MapActions.SHOW_NAVIGATION,
          payload: {
            route,
            autoMode: params?.autoMode === undefined ? true : params.autoMode,
            zoomEnabled:
              params?.zoomEnabled === undefined ? true : params.zoomEnabled,
            showPins: params?.showPins === undefined ? true : params.showPins,
          },
        });
      },
      showNavigationWithMultiple(segments, params) {
        postMessage({
          action: MapActions.SHOW_NAVIGATION_MULTIPLE,
          payload: {
            navigationDetails: segments,
            autoMode: params?.autoMode === undefined ? false : params.autoMode,
            zoomEnabled:
              params?.zoomEnabled === undefined ? true : params.zoomEnabled,
            showPins: params?.showPins === undefined ? true : params.showPins,
            groupIndex:
              params?.groupIndex === undefined ? 0 : params.groupIndex,
          },
        });
      },
      startNavigation(program: StartNavigationProgram, params) {
        postMessage({
          action: MapActions.START_NAVIGATION,
          payload: {
            navigationDetails: program,
            autoMode: params?.autoMode === undefined ? true : params.autoMode,
            zoomEnabled:
              params?.zoomEnabled === undefined ? true : params.zoomEnabled,
            showPins: params?.showPins === undefined ? true : params.showPins,
          },
        });
      },
      restartNavigation() {
        postMessage({
          action: MapActions.RESTART_NAVIGATION,
          payload: {},
        });
      },
      prevNavigate(params) {
        postMessage({
          action: MapActions.PREV_NAVIGATE,
          payload: {
            autoMode: params?.autoMode === undefined ? false : params.autoMode,
            zoomEnabled:
              params?.zoomEnabled === undefined ? true : params.zoomEnabled,
            showPins: params?.showPins === undefined ? true : params.showPins,
          },
        });
      },
      nextNavigate(params) {
        postMessage({
          action: MapActions.NEXT_NAVIGATE,
          payload: {
            autoMode: params?.autoMode === undefined ? false : params.autoMode,
            zoomEnabled:
              params?.zoomEnabled === undefined ? true : params.zoomEnabled,
            showPins: params?.showPins === undefined ? true : params.showPins,
          },
        });
      },
      prevBuildingNavigate(params) {
        postMessage({
          action: MapActions.PREV_BUILDING_NAVIGATE,
          payload: {
            autoMode: params?.autoMode === undefined ? false : params.autoMode,
            zoomEnabled:
              params?.zoomEnabled === undefined ? true : params.zoomEnabled,
            showPins: params?.showPins === undefined ? true : params.showPins,
          },
        });
      },
      nextBuildingNavigate(params) {
        postMessage({
          action: MapActions.NEXT_BUILDING_NAVIGATE,
          payload: {
            autoMode: params?.autoMode === undefined ? false : params.autoMode,
            zoomEnabled:
              params?.zoomEnabled === undefined ? true : params.zoomEnabled,
            showPins: params?.showPins === undefined ? true : params.showPins,
          },
        });
      },
      enterBuilding(buildingId) {
        postMessage({
          action: MapActions.ENTER_BUILDING,
          payload: { buildingId },
        });
      },
      exitBuilding() {
        postMessage({
          action: MapActions.EXIT_BUILDING,
          payload: {},
        });
      },
      updateLocalized(params) {
        postMessage({
          action: MapActions.UPDATE_LOCALIZED,
          payload: { ...params },
        });
      },
      changeNavigationPins(params) {
        postMessage({
          action: MapActions.CHANGE_NAVIGATION_PINS,
          payload: { ...params },
        });
      },
      resetNavigationPins() {
        postMessage({
          action: MapActions.RESET_NAVIGATION_PINS,
        });
      },
      setCurrentLocationFromBlock(locationId) {
        postMessage({
          action: MapActions.SET_CURRENT_LOCATION_FROM_BLOCK,
          payload: { locationId },
        });
      },
      setFloorById(levelId, params) {
        postMessage({
          action: MapActions.SELECT_FLOOR_BY_ID,
          payload: {
            levelId,
            resetZoom:
              params?.resetZoom === undefined ? true : params.resetZoom,
            hideLocation:
              params?.hideLocation === undefined ? true : params.hideLocation,
            autoMode: params?.autoMode === undefined ? false : params.autoMode,
            willSwitchLevel:
              params?.willSwitchLevel === undefined
                ? true
                : params.willSwitchLevel,
          },
        });
      },
      highlightLocation(id, opts) {
        postMessage({
          action: MapActions.HIGHLIGHT_LOCATION,
          payload: {
            id,
            zoomEnabled:
              opts?.zoomEnabled === undefined ? true : opts.zoomEnabled,
            duration: opts?.duration,
          },
        });
      },
      setFloor(floorNo, params) {
        postMessage({
          action: MapActions.SET_FLOOR,
          payload: {
            floorNo,
            resetZoom:
              params?.resetZoom === undefined ? true : params.resetZoom,
            hideLocation:
              params?.hideLocation === undefined ? true : params.hideLocation,
          },
        });
      },
      highlightLocations(ids, params) {
        postMessage({
          action: MapActions.HIGHLIGHT_LOCATIONS,
          payload: {
            ids,
            type:
              params?.type === undefined ? LocationTypes.STORE : params.type,
            zoomEnabled: params?.zoomEnabled,
            duration: params?.duration,
          },
        });
      },
      hideLocation() {
        postMessage({
          action: MapActions.HIDE_LOCATION,
        });
      },
      setCurrentLocation(x, y, locationOpts) {
        postMessage({
          action: MapActions.SET_CURRENT_LOCATION,
          payload: {
            x,
            y,
            floorNo: locationOpts?.floorNo,
          },
        });
      },
      showCurrentLocation() {
        postMessage({
          action: MapActions.SHOW_CURRENT_LOCATION,
        });
      },
      moveCurrentLocation(coords, moveOpts) {
        postMessage({
          action: MapActions.MOVE_CURRENT_LOCATION,
          payload: {
            coords,
            floorNo: moveOpts?.floorNo,
          },
        });
      },
      removeCurrentLocation() {
        postMessage({
          action: MapActions.REMOVE_CURRENT_LOCATION,
        });
      },
      zoomIn() {
        postMessage({
          action: MapActions.ZOOM_IN,
        });
      },
      zoomOut() {
        postMessage({
          action: MapActions.ZOOM_OUT,
        });
      },
      moveTo(x, y, params) {
        postMessage({
          action: MapActions.MOVE_TO,
          payload: {
            x,
            y,
            scale: params?.scale,
            duration: params?.duration,
            easing: params?.easing,
          },
        });
      },
      zoomTo(x, y, params) {
        postMessage({
          action: MapActions.ZOOM_TO,
          payload: {
            x,
            y,
            scale: params?.scale,
            duration: params?.duration,
            easing: params?.easing,
          },
        });
      },
      addLevel(level) {
        postMessage({
          action: MapActions.ADD_LEVEL,
          payload: {
            level,
          },
        });
      },
      resetLevel() {
        postMessage({
          action: MapActions.RESET_LEVEL,
        });
      },
      changeColors(colors) {
        postMessage({
          action: MapActions.CHANGE_COLORS,
          payload: {
            ...colors,
          },
        });
      },
      calculateSP(startLocation, endLocation, routeType = 'auto') {
        return bridgeCall(MapActions.CALCULATE_SP, {
          startLocation,
          endLocation,
          routeType,
        });
      },
      calculateSP_v2(startLocation, endLocation, routeType = 'auto') {
        return bridgeCall(MapActions.CALCULATE_SP_V2, {
          startLocation,
          endLocation,
          routeType,
        });
      },
      getLevels() {
        return bridgeCall(MapActions.GET_LEVELS, {});
      },
      getNodes() {
        return bridgeCall(MapActions.GET_NODES, {});
      },
      getPaths() {
        return bridgeCall(MapActions.GET_PATHS, {});
      },
      isMultiBuilding() {
        return bridgeCall<boolean>(MapActions.IS_MULTI_BUILDING, {});
      },
      getNavigationDetails(offset = 0) {
        return bridgeCall(MapActions.GET_NAVIGATION_DETAILS, { offset });
      },
      prevLevelId() {
        return bridgeCall<string | undefined>(MapActions.PREV_LEVEL_ID, {});
      },
      nextLevelId() {
        return bridgeCall<string | undefined>(MapActions.NEXT_LEVEL_ID, {});
      },
      hasPrevNavigate() {
        return bridgeCall<boolean>(MapActions.HAS_PREV_NAVIGATE, {});
      },
      hasNextNavigate() {
        return bridgeCall<boolean>(MapActions.HAS_NEXT_NAVIGATE, {});
      },
      prevBuildingId() {
        return bridgeCall<string | boolean | undefined>(
          MapActions.PREV_BUILDING_ID,
          {}
        );
      },
      nextBuildingId() {
        return bridgeCall<string | boolean | undefined>(
          MapActions.NEXT_BUILDING_ID,
          {}
        );
      },
      hasPrevBuildingNavigate() {
        return bridgeCall<boolean>(MapActions.HAS_PREV_BUILDING_NAVIGATE, {});
      },
      hasNextBuildingNavigate() {
        return bridgeCall<boolean>(MapActions.HAS_NEXT_BUILDING_NAVIGATE, {});
      },
      reload() {
        postMessage({
          action: MapActions.RELOAD,
        });
      },
    }));

    return (
      <WebView
        ref={webViewRef}
        source={
          Platform.OS === 'android'
            ? {
                uri: 'file:///android_asset/assets/mechanic_map.html',
              }
            : require('../assets/mechanic_map.html')
        }
        onMessage={(msg: WebViewMessageEvent) => {
          const parsed = parseMapWebViewMessage(msg.nativeEvent.data);
          if (!parsed.ok) {
            const { failure } = parsed;
            if (failure.reason === 'invalid_json') {
              reportBridgeFailure(
                onMapError,
                'Invalid WebView message',
                'JSON parse failed'
              );
            } else if (failure.reason === 'invalid_shape') {
              reportBridgeFailure(
                onMapError,
                'Invalid WebView message',
                'Expected a JSON object'
              );
            } else {
              reportBridgeFailure(
                onMapError,
                'Unknown map message action',
                `action=${failure.action}`
              );
            }
            return;
          }

          const mapEvent = parsed.payload;

          if (
            mapEvent.action === MapResponses.BRIDGE_RESULT &&
            mapEvent.data?.requestId != null
          ) {
            const d = mapEvent.data;
            const pending = bridgePendingRef.current.get(d.requestId);
            if (pending) {
              bridgePendingRef.current.delete(d.requestId);
              if (d.ok) {
                pending.resolve(d.result);
              } else {
                pending.reject(new Error(d.error ?? 'Bridge command failed'));
              }
            }
          }

          if (onEvent) {
            onEvent(mapEvent);
          }

          switch (mapEvent.action) {
            case MapResponses.MAP_LOADED:
              onMapLoaded?.();
              break;
            case MapResponses.LOCATION_OPENED:
              if (mapEvent.data !== undefined) {
                onLocationOpened?.(mapEvent.data);
              }
              break;
            case MapResponses.LOCATION_CLOSED:
              onLocationClosed?.();
              break;
            case MapResponses.LEVEL_SWITCHED:
              if (mapEvent.data !== undefined) {
                onLevelSwitched?.(mapEvent.data);
              }
              break;
            case MapResponses.NAVIGATION_CANCELLED:
              onNavigationCancelled?.();
              break;
            case MapResponses.LOCATION_HIGHLIGHTED:
              onLocationHighlighted?.();
              break;
            case MapResponses.TOOLTIP_NAVIGATION_CLICKED:
              if (mapEvent.data !== undefined) {
                onTooltipNavigationClick?.(mapEvent.data);
              }
              break;
            case MapResponses.TOOLTIP_DETAIL_CLICKED:
              if (mapEvent.data !== undefined) {
                onTooltipDetailClick?.(mapEvent.data);
              }
              break;
            case MapResponses.TOOLTIP_ENTER_BUILDING_CLICKED:
              if (mapEvent.data !== undefined) {
                onTooltipEnterBuildingClick?.(mapEvent.data);
              }
              break;
            case MapResponses.TOOLTIP_CLOSE_CLICKED:
              onTooltipCloseClick?.();
              break;
            case MapResponses.ERROR:
              if (mapEvent.data !== undefined) {
                onMapError?.(mapEvent.data);
              }
              break;
            case MapResponses.LEVELS_READY:
              if (mapEvent.data !== undefined) {
                onLevelsReady?.(mapEvent.data);
              }
              break;
            case MapResponses.LEVEL_READY:
              if (mapEvent.data !== undefined) {
                onLevelReady?.(mapEvent.data);
              }
              break;
            case MapResponses.NAVIGATION_STATE:
              onNavigationState?.(mapEvent.data ?? null);
              break;
            case MapResponses.BEACON_CLICKED:
              onBeaconClicked?.(mapEvent.data);
              break;
            case MapResponses.POSITION_CHANGED:
              onPositionChanged?.(mapEvent.data);
              break;
            case MapResponses.LOCATION_HIGHLIGHTED_SINGLE:
              onSingleLocationHighlighted?.(mapEvent.data);
              break;
            case MapResponses.BRIDGE_RESULT:
              break;
          }
        }}
        onError={(e: WebViewErrorEvent) => {
          onWebViewErrorProp?.(e);
          const ne = e.nativeEvent;
          reportBridgeFailure(
            onMapError,
            ne.description || 'WebView load error',
            ne.domain != null ? `${ne.domain}:${ne.code}` : String(ne.code),
            ne.url
          );
        }}
        onHttpError={(e: WebViewHttpErrorEvent) => {
          onHttpErrorProp?.(e);
          const ne = e.nativeEvent;
          reportBridgeFailure(
            onMapError,
            ne.description || 'WebView HTTP error',
            `HTTP ${ne.statusCode}`,
            ne.url
          );
        }}
        onRenderProcessGone={(e: WebViewRenderProcessGoneEvent) => {
          onRenderProcessGoneProp?.(e);
          reportBridgeFailure(
            onMapError,
            'WebView render process exited',
            e.nativeEvent.didCrash ? 'crashed' : 'system terminated',
            'react-native-webview'
          );
        }}
        onLoadEnd={() => {
          if (disableAutoInit) return;

          postMessage({
            action: MapActions.INIT,
            payload: {
              language: languageCode,
              levels: payload,
              options,
            },
          });
        }}
        allowFileAccess
        allowUniversalAccessFromFileURLs
        originWhitelist={['*']}
        hideKeyboardAccessoryView={false}
        {...props}
      />
    );
  }
);

export default MechanicMap;
