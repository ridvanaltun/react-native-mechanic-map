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
      onMapError,
      onError: onWebViewErrorProp,
      onHttpError: onHttpErrorProp,
      onRenderProcessGone: onRenderProcessGoneProp,
      ...props
    },
    ref
  ) => {
    const webViewRef = useRef<WebView>(null);

    const postMessage = (message: PostMessagePayload) => {
      const messageStr = JSON.stringify(message);
      webViewRef.current?.postMessage(messageStr);
    };

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
            case MapResponses.ERROR:
              if (mapEvent.data !== undefined) {
                onMapError?.(mapEvent.data);
              }
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
