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
  HIGHLIGHT_LOCATIONS = 'highlightLocations',
  HIDE_LOCATION = 'hideLocation',
  SET_CURRENT_LOCATION = 'setCurrentLocation',
  SHOW_CURRENT_LOCATION = 'showCurrentLocation',
  MOVE_CURRENT_LOCATION = 'moveCurrentLocation',
  REMOVE_CURRENT_LOCATION = 'removeCurrentLocation',
  RELOAD = 'reload',
}

export enum MapResponses {
  MAP_LOADED = 'mapLoaded',
  LOCATION_OPENED = 'locationOpened',
  LOCATION_CLOSED = 'locationClosed',
  LEVEL_SWITCHED = 'levelSwitched',
  LOCATION_HIGHLIGHTED = 'locationsHighlighted',
  NAVIGATION_CANCELLED = 'navigationCancelled',
  ERROR = 'error',
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

export enum MapModes {
  DEFAULT = 'default',
  PICKER = 'picker',
}

export enum MapActionModes {
  DEFAULT = 'default',
  TOOLTIP = 'tooltip',
  SELECT = 'select',
  ZOOM = 'zoom',
  NOT_EMPTY = 'not-empty',
}

export enum MapAnimationModes {
  LINE = 'line',
  DOT = 'dot',
  ARROW = 'arrow',
  FOOT = 'foot',
  FEET = 'feet',
}

interface MechanicMapOptions {
  mode?: MapModes;
  action?: MapActionModes;
  initialScaleFactor?: Number;
  maxScale?: Number;
  rotate?: Number;
  selector?: String;
  serviceSelector?: String;
  rectSelector?: String;
  rotateServices?: Boolean;
  draggable?: Boolean;
  landmark?: Boolean;
  developer?: Boolean;
  zoom?: Boolean;
  zoomToSelected?: Boolean;
  hoverTip?: Boolean;
  cssAnimation?: Boolean;
  textOnRect?: {
    fontFamily?: String;
    fillColor?: String;
    fontSize: Number;
  };
  strokeOptions?: {
    width?: Number;
    color?: String;
  };
  mapFill?: Boolean;
  tooltip?: {
    enabled: Boolean;
    navigation?: Boolean;
    detail?: Boolean;
  };
  smartip?: Boolean;
  animation?: {
    mode?: MapAnimationModes;
    speedFactor?: Number;
    frequencyFactor?: Number;
    stackAnimation?: Boolean;
  };
  stackMode?: {
    offset: Number;
  };
  beaconMode?: Boolean;
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
  onLocationClosed?: () => void;
  onMapLoaded?: () => void;
  onNavigationCancalled?: () => void;
  onLocationHighlighted?: () => void;
  onMapError?: (data: {
    message: String;
    source: String;
    lineno: Number;
    colno: Number;
    error: String;
  }) => void;
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

export type MechanicMapHandle = {
  postMessage: (params: PostMessagePayload) => void;
  init: (params: InitParams) => void;
  showLocation: (params: {
    id: String;
    type: LocationTypes;
    duration?: Boolean;
    closeNavigation?: Boolean;
    moveAndZoom?: Boolean;
  }) => void;
  closeNavigation: (resetLevel?: Boolean) => void;
  showNavigation: (
    route: Route,
    options?: {
      autoMode?: Boolean;
      zoomEnabled?: Boolean;
      showPins?: Boolean;
    }
  ) => void;
  setFloor: (
    floorNo: Number,
    options?: { resetZoom?: Boolean; hideLocation?: Boolean }
  ) => void;
  highlightLocations: (
    ids: Array<String>,
    options?: {
      type?: LocationTypes;
      zoomEnabled?: Boolean;
      duration?: Number;
    }
  ) => void;
  hideLocation: () => void;
  setCurrentLocation: (
    x: Number,
    y: Number,
    options?: { floorNo?: Number }
  ) => void;
  showCurrentLocation: () => void;
  moveCurrentLocation: (
    coords: Array<{ x: Number; y: Number }>,
    options?: { floorNo?: Number }
  ) => void;
  removeCurrentLocation: () => void;
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
