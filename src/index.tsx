import type { WebViewProps } from 'react-native-webview';

import MechanicMap from './MechanicMap';

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
  ZOOM_IN = 'zoomIn',
  ZOOM_OUT = 'zoomOut',
  ADD_LEVEL = 'addLevel',
  RESET_LEVEL = 'resetLevel',
  MOVE_TO = 'moveTo',
  ZOOM_TO = 'zoomTo',
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

export interface EventPayload {
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

export interface MechanicMapOptions {
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

export interface PostMessagePayload {
  action: MapActions;
  payload?: object;
}

interface InitParams {
  payload: MechanicMapPayload[];
  options?: MechanicMapOptions;
  languageCode?: String;
}

export interface MechanicMapProps extends InitParams, WebViewProps {
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
  zoomIn: () => void;
  zoomOut: () => void;
  moveTo: (
    x: Number,
    y: Number,
    options?: {
      scale?: Number;
      duration?: Number;
      easing?: String; // todo @ add enum
    }
  ) => void;
  zoomTo: (
    x: Number,
    y: Number,
    options?: {
      scale?: Number;
      duration?: Number;
      easing?: String; // todo @ add enum
    }
  ) => void;
  addLevel: (level: MechanicMapPayload) => void;
  resetLevel: () => void;
  reload: () => void;
};

export default MechanicMap;
