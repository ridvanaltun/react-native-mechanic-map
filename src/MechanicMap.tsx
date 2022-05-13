import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { Platform } from 'react-native';
import PropTypes from 'prop-types';
import { WebView, WebViewMessageEvent } from 'react-native-webview';

import {
  EventPayload,
  LocationTypes,
  MapActions,
  MapResponses,
  MechanicMapHandle,
  MechanicMapProps,
  PostMessagePayload,
} from './index';

const MechanicMap = forwardRef<MechanicMapHandle, MechanicMapProps>(
  (
    {
      languageCode,
      disableAutoInit,
      payload,
      options,
      onEvent,
      onLevelSwitched,
      onLocationOpened,
      onLocationClosed,
      onMapLoaded,
      onNavigationCancalled,
      onLocationHighlighted,
      onMapError,
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
      setCurrentLocation(x, y, floorNo) {
        postMessage({
          action: MapActions.SET_CURRENT_LOCATION,
          payload: {
            x,
            y,
            floorNo,
          },
        });
      },
      showCurrentLocation() {
        postMessage({
          action: MapActions.SHOW_CURRENT_LOCATION,
        });
      },
      moveCurrentLocation(coords, params) {
        postMessage({
          action: MapActions.MOVE_CURRENT_LOCATION,
          payload: {
            coords,
            floorNo: params?.floorNo,
          },
        });
      },
      removeCurrentLocation() {
        postMessage({
          action: MapActions.REMOVE_CURRENT_LOCATION,
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
        onMessage={(event: WebViewMessageEvent) => {
          const { action, data }: EventPayload = JSON.parse(
            event.nativeEvent.data
          );

          if (onEvent) {
            onEvent({ action, data });
          }

          if (action === MapResponses.MAP_LOADED && onMapLoaded) {
            onMapLoaded();
          }

          if (action === MapResponses.LOCATION_OPENED && onLocationOpened) {
            onLocationOpened(data);
          }

          if (action === MapResponses.LOCATION_CLOSED && onLocationClosed) {
            onLocationClosed();
          }

          if (action === MapResponses.LEVEL_SWITCHED && onLevelSwitched) {
            onLevelSwitched(data); // new floor no
          }

          if (
            action === MapResponses.NAVIGATION_CANCELLED &&
            onNavigationCancalled
          ) {
            onNavigationCancalled();
          }

          if (
            action === MapResponses.LOCATION_HIGHLIGHTED &&
            onLocationHighlighted
          ) {
            onLocationHighlighted();
          }

          if (action === MapResponses.ERROR && onMapError) {
            onMapError(data);
          }
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

MechanicMap.propTypes = {
  payload: PropTypes.array.isRequired,
};

MechanicMap.defaultProps = {
  languageCode: 'en',
  disableAutoInit: false,
  options: {},
};

export default MechanicMap;
