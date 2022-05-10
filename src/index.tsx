import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { Platform } from 'react-native';
import PropTypes from 'prop-types';
import {
  WebView,
  WebViewMessageEvent,
  WebViewProps,
} from 'react-native-webview';

export enum LocationTypes {
  STORE = 'store',
  SERVICE = 'service',
}

export enum LocationActions {
  ZOOM = 'zoom',
  SELECT = 'select',
  TOOLTIP = 'tooltip',
  NOT_EMPTY = 'not-empty',
}

export enum MapActions {
  INIT = 'init',
  SHOW_NAVIGATION = 'showNavigation',
  CLOSE_NAVIGATION = 'closeNavigation',
  SHOW_LOCATION = 'selectLocation',
  SET_FLOOR = 'selectFloor',
  RELOAD = 'reload',
}

export enum MapResponses {
  MAP_LOADED = 'mapLoaded',
  LOCATION_OPENED = 'locationOpened',
  LOCATION_CLOSED = 'locationClosed',
  LEVEL_SWITCHED = 'levelSwitched',
}

interface EventPayload {
  action: MapResponses;
  data?: any;
}

export interface Location {
  id: String;
  type: LocationTypes | String;
  title: String;
  image_url: String;
  zoom?: Number;
  action?: LocationActions;
  explanation?: String;
}

export interface MechanicMapPayload {
  id: String;
  no: Number;
  mapWidth: Number;
  mapHeight: Number;
  title: String;
  map: String;
  locations: Location[];
  show: Boolean;
}

interface MechanicMapOptions {
  initialScaleFactor?: Number;
  maxScale?: Number;
  rotate?: Number;
  selector?: String;
  serviceSelector?: String;
  rotateServices?: Boolean;
  draggable?: Boolean;
  landmark?: Boolean;
  developer?: Boolean;
  zoom?: Boolean;
  zoomToSelected?: Boolean;
  hoverTip?: Boolean;
}

interface PostMessagePayload {
  action: MapActions;
  payload?: object;
}

interface InitParams {
  payload: MechanicMapPayload[];
  options?: MechanicMapOptions;
  languageCode?: String;
}

interface MechanicMapProps extends InitParams, WebViewProps {
  disableAutoInit?: Boolean;
  onEvent?: (event: EventPayload) => void;
  onLevelSwitched?: (newLevel: String) => void;
  onLocationOpened?: (location: Location) => void;
  onMapLoaded?: () => void;
}

export interface Route {
  nodes: Array<String>;
  direction: Array<Number>;
  floors: Array<{
    no: Number;
    lines: Array<{
      x1: Number;
      y1: Number;
      x2: Number;
      y2: Number;
      node_level_changer?: String;
    }>;
  }>;
  end: String;
  start: {
    location: String;
  };
}

interface ShowNavigationParams {
  route: Route;
  autoMode?: Boolean;
  zoomEnabled?: Boolean;
  showPins?: Boolean;
}

interface ShowLocationParams {
  id: String;
  type: LocationTypes;
  duration?: Boolean;
  closeNavigation?: Boolean;
  moveAndZoom?: Boolean;
}

export type MechanicMapHandle = {
  postMessage: (params: PostMessagePayload) => void;
  init: (params: InitParams) => void;
  showLocation: (params: ShowLocationParams) => void;
  closeNavigation: (resetLevel?: boolean) => void;
  showNavigation: (params: ShowNavigationParams) => void;
  setFloor: (
    floorNo: Number,
    resetZoom?: boolean,
    hideLocation?: boolean
  ) => void;
  reload: () => void;
};

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
      onMapLoaded,
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
      showNavigation({
        route,
        autoMode = true,
        zoomEnabled = true,
        showPins = true,
      }) {
        postMessage({
          action: MapActions.SHOW_NAVIGATION,
          payload: {
            route,
            autoMode,
            zoomEnabled,
            showPins,
          },
        });
      },
      setFloor(floorNo, resetZoom = true, hideLocation = true) {
        postMessage({
          action: MapActions.SET_FLOOR,
          payload: {
            floorNo,
            resetZoom,
            hideLocation,
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
                uri: 'file:///android_asset/assets/mall.html',
              }
            : require('../assets/mall.html')
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

          if (action === MapResponses.LEVEL_SWITCHED && onLevelSwitched) {
            onLevelSwitched(data); // new floor no
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
