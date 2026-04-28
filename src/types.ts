import type { WebViewProps } from 'react-native-webview';

import {
  MapResponses,
  type LocationActions,
  type LocationTypes,
  type MapActions,
  type MapActionModes,
  type MapAnimationModes,
  type MapModes,
} from './mapEnums';

export type LocationId = string;
export type LevelId = string;

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;

/**
 * Map rotation in degrees. Core (`map.js`) keeps only multiples of 90 in \[0, 360).
 * Any other numeric input is treated as 0 at runtime.
 */
export type MechanicMapRotateDegrees = 0 | 90 | 180 | 270;

export interface Location {
  id: LocationId;
  type: LocationTypes | string;
  title: string;
  logo: string;
  zoom?: number;
  action?: LocationActions;
}

/** Shape of `data` for {@link MapResponses.ERROR} from the embedded map script. */
export interface MapScriptErrorData {
  message: string;
  source: string;
  lineno: number;
  colno: number;
  error: string;
}

export type LevelSwitchedData = {
  id: LevelId;
  no: number;
};

export interface TooltipNavigationClickData {
  locationId: LocationId;
}

export interface TooltipDetailClickData {
  locationId: LocationId;
}

export interface TooltipEnterBuildingClickData {
  buildingId: string;
  locationId: LocationId;
}

/**
 * Discriminated union: `data` is typed for each {@link MapResponses} value.
 * Runtime values are normalized in `parseMapWebViewMessage`.
 */
export type EventPayload =
  | { action: MapResponses.MAP_LOADED; data?: unknown }
  | { action: MapResponses.LOCATION_OPENED; data?: Location }
  | { action: MapResponses.LOCATION_CLOSED; data?: unknown }
  | { action: MapResponses.LEVEL_SWITCHED; data?: LevelSwitchedData }
  | { action: MapResponses.LOCATION_HIGHLIGHTED; data?: unknown }
  | { action: MapResponses.NAVIGATION_CANCELLED; data?: unknown }
  | {
      action: MapResponses.TOOLTIP_NAVIGATION_CLICKED;
      data?: TooltipNavigationClickData;
    }
  | {
      action: MapResponses.TOOLTIP_DETAIL_CLICKED;
      data?: TooltipDetailClickData;
    }
  | {
      action: MapResponses.TOOLTIP_ENTER_BUILDING_CLICKED;
      data?: TooltipEnterBuildingClickData;
    }
  | { action: MapResponses.TOOLTIP_CLOSE_CLICKED; data?: unknown }
  | { action: MapResponses.ERROR; data?: MapScriptErrorData };

export interface MechanicMapPayload {
  id: LevelId;
  no: number;
  mapWidth: number;
  mapHeight: number;
  title: string;
  map: string;
  locations: Location[];
}

export interface ColorParams {
  activeStores?: Color;
  inactiveStores?: Color;
  services?: Color;
  background?: Color;
  locations?: {
    [key: string]: Color;
  };
}

export interface MechanicMapOptions {
  mode?: MapModes;
  action?: MapActionModes;
  initialScaleFactor?: number;
  maxScale?: number;
  rotate?: MechanicMapRotateDegrees;
  selector?: string;
  serviceSelector?: string;
  rectSelector?: string;
  rotateServices?: boolean;
  draggable?: boolean;
  landmark?: boolean;
  developer?: boolean;
  zoom?: boolean;
  zoomToSelected?: boolean;
  hoverTip?: boolean;
  cssAnimation?: boolean;
  textOnRect?: {
    fontFamily?: string;
    fillColor?: string;
    fontSize: number;
  };
  strokeOptions?: {
    width?: number;
    color?: string;
  };
  mapFill?: boolean;
  tooltip?: {
    enabled: boolean;
    navigation?: boolean;
    detail?: boolean;
  };
  smartip?: boolean;
  animation?: {
    mode?: MapAnimationModes;
    speedFactor?: number;
    frequencyFactor?: number;
    stackAnimation?: boolean;
  };
  stackMode?: {
    offset: number;
  };
  beaconMode?: boolean;
  colors?: ColorParams;
}

export interface PostMessagePayload {
  action: MapActions;
  payload?: object;
}

export interface InitParams {
  payload: MechanicMapPayload[];
  options?: MechanicMapOptions;
  languageCode?: string;
}

export interface MechanicMapProps extends InitParams, WebViewProps {
  disableAutoInit?: boolean;
  onEvent?: (event: EventPayload) => void;
  onLevelSwitched?: (newLevel: LevelSwitchedData) => void;
  onLocationOpened?: (location: Location) => void;
  onLocationClosed?: () => void;
  onMapLoaded?: () => void;
  onNavigationCancelled?: () => void;
  onLocationHighlighted?: () => void;
  /** Tooltip “navigate here” (core `navigationClicked`). */
  onTooltipNavigationClick?: (data: TooltipNavigationClickData) => void;
  /** Tooltip “details” (core `detailClicked`). */
  onTooltipDetailClick?: (data: TooltipDetailClickData) => void;
  /** Tooltip “enter building” (core `enterBuildingClicked`). */
  onTooltipEnterBuildingClick?: (data: TooltipEnterBuildingClickData) => void;
  /** Tooltip close (core `closeClicked`). */
  onTooltipCloseClick?: () => void;
  onMapError?: (data: MapScriptErrorData) => void;
}

export interface Route {
  nodes: string[];
  direction: number[];
  floors: Array<{
    no: number;
    lines: Array<{
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      node_level_changer?: string;
    }>;
  }>;
  end: string;
  start: {
    location: string;
  };
}

export type MechanicMapHandle = {
  postMessage: (params: PostMessagePayload) => void;
  init: (params: InitParams) => void;
  showLocation: (params: {
    id: LocationId;
    type: LocationTypes;
    duration?: boolean;
    closeNavigation?: boolean;
    moveAndZoom?: boolean;
  }) => void;
  closeNavigation: (resetLevel?: boolean) => void;
  showNavigation: (
    route: Route,
    options?: {
      autoMode?: boolean;
      zoomEnabled?: boolean;
      showPins?: boolean;
    }
  ) => void;
  setFloor: (
    floorNo: number,
    options?: { resetZoom?: boolean; hideLocation?: boolean }
  ) => void;
  highlightLocations: (
    ids: string[],
    options?: {
      type?: LocationTypes;
      zoomEnabled?: boolean;
      duration?: number;
    }
  ) => void;
  hideLocation: () => void;
  setCurrentLocation: (
    x: number,
    y: number,
    options?: { floorNo?: number }
  ) => void;
  showCurrentLocation: () => void;
  moveCurrentLocation: (
    coords: Array<{ x: number; y: number }>,
    options?: { floorNo?: number }
  ) => void;
  removeCurrentLocation: () => void;
  zoomIn: () => void;
  zoomOut: () => void;
  moveTo: (
    x: number,
    y: number,
    options?: {
      scale?: number;
      duration?: number;
      easing?: string;
    }
  ) => void;
  zoomTo: (
    x: number,
    y: number,
    options?: {
      scale?: number;
      duration?: number;
      easing?: string;
    }
  ) => void;
  addLevel: (level: MechanicMapPayload) => void;
  resetLevel: () => void;
  changeColors: (colors: ColorParams) => void;
  reload: () => void;
};
