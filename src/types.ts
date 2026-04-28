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

/** Allowed values for `textOnRect.mode`. */
export type MechanicMapTextOnRectMode = 'static' | 'dynamic';

/**
 * Map rotation in degrees. The embedded map keeps only multiples of 90 in \[0, 360).
 * Any other numeric input is treated as 0 at runtime.
 */
export type MechanicMapRotateDegrees = 0 | 90 | 180 | 270;

/**
 * Tooltip UI options passed through to the WebView map.
 * When a key is an object, the map renders custom labels / images for that control.
 */
export interface MechanicMapTooltipOptions {
  enabled?: boolean;
  navigation?: boolean | { image?: string; text?: string };
  detail?: boolean | { text?: string };
  enterBuilding?: boolean | { text?: string };
  /** Custom HTML fragment for the tooltip shell; requires the element ids the template expects. */
  renderTemplate?: string | false;
}

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

/** Payload for {@link MapResponses.LEVELS_READY} / core `levelsReady`. */
export interface LevelsReadyPayload {
  levels: unknown[];
  levelId: string;
  isOutdoor: boolean;
}

/** Payload for {@link MapResponses.LEVEL_READY} / core `levelReady`. */
export interface LevelReadyPayload {
  levelId: string;
  levelNo: number;
  isOutdoor: boolean;
}

/**
 * Payload for {@link MapResponses.NAVIGATION_STATE} / core `navigation`
 * (current/prev/next floor and multi-building hints).
 */
export interface NavigationStatePayload {
  prevLevelId?: string;
  currentLevelId?: string;
  nextLevelId?: string;
  isStartFloor?: boolean;
  isEndFloor?: boolean;
  levelChanger?: unknown;
  hasPrevNavigate?: boolean;
  hasNextNavigate?: boolean;
  prevBuildingId?: string | boolean;
  nextBuildingId?: string | boolean;
  hasPrevBuildingNavigate?: boolean;
  hasNextBuildingNavigate?: boolean;
}

/** Async result from bridge query commands (`calculateSP`, `getLevels`, …). */
export interface BridgeResultPayload {
  requestId: string;
  command: string;
  ok: boolean;
  result?: unknown;
  error?: string;
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
  | { action: MapResponses.ERROR; data?: MapScriptErrorData }
  | { action: MapResponses.LEVELS_READY; data?: LevelsReadyPayload }
  | { action: MapResponses.LEVEL_READY; data?: LevelReadyPayload }
  | {
      action: MapResponses.NAVIGATION_STATE;
      data?: NavigationStatePayload | null;
    }
  | { action: MapResponses.BEACON_CLICKED; data?: unknown }
  | { action: MapResponses.POSITION_CHANGED; data?: unknown }
  | { action: MapResponses.LOCATION_HIGHLIGHTED_SINGLE; data?: unknown }
  | { action: MapResponses.BRIDGE_RESULT; data?: BridgeResultPayload };

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

/**
 * Initialization options forwarded to the embedded Mechanic Map (`init` payload).
 * Fields mirror what the bundled script reads during setup and level processing.
 */
export interface MechanicMapOptions {
  /** Merged with top-level `language` from the React Native `init` message. */
  locale?: {
    language?: string;
    availableLanguages?: string[];
  };
  mode?: MapModes;
  /** When set by the backend payload, marks locations that must not be selectable. */
  locationCannotBeSelected?: unknown;
  helperTexts?: {
    youAreHere?: string;
  };
  action?: MapActionModes;
  initialScaleFactor?: number;
  /** If set, `maxScale` is derived from `parseFloat(zoomLimit)` when levels are processed. */
  zoomLimit?: string | number;
  maxScale?: number;
  /** Scales navigation line animation relative to the map viewport. */
  animationScale?: number;
  rotate?: MechanicMapRotateDegrees;
  /** When `true`, map content is rotated together with the SVG. */
  rotatable?: boolean;
  selector?: string;
  serviceSelector?: string;
  rotateServices?: boolean;
  /** CSS selectors for rotated path / label layers (defaults match the bundled plugin). */
  rotatable90PathSelector?: string;
  rotatable180PathSelector?: string;
  rotatable270TextSelector?: string;
  rotatable180TextSelector?: string;
  rectSelector?: string;
  /** Elements matching this selector do not receive pointer events (e.g. decorative groups). */
  noPointerGroupSelector?: string;
  draggable?: boolean;
  landmark?: boolean;
  developer?: boolean;
  /** Container height in px (applied to the root `.svg-map-element`). */
  height?: number;
  zoom?: boolean;
  zoomToSelected?: boolean;
  hoverTip?: boolean;
  cssAnimation?: boolean;
  /** Duration base for CSS animation (ms); combined with path length for transition timing. */
  cssAnimationTime?: number;
  /** Disables mouse wheel zoom in WebView / desktop environments. */
  mouseWheel?: boolean;
  /** Global fill helper string passed into the map script. */
  fillColor?: string;
  textOnRect?:
    | boolean
    | {
        enabled?: boolean;
        fontFamily?: string;
        /** Used on web; RN examples often set this for rect label color. */
        fillColor?: string;
        fontSize?: number;
        maxFontSize?: number;
        minFontSize?: number;
        mode?: MechanicMapTextOnRectMode;
        availableModes?: MechanicMapTextOnRectMode[];
      };
  strokeOptions?: {
    width?: number;
    color?: string;
  };
  mapFill?: boolean;
  tooltip?: MechanicMapTooltipOptions;
  smartip?: boolean;
  animation?: {
    mode?: MapAnimationModes;
    speedFactor?: number;
    frequencyFactor?: number;
    /**
     * When `true`, `stackMode.enabled` must be set; the map aborts init if stack
     * animation is on without stack mode.
     */
    stackAnimation?: boolean;
    debugContainer?: string;
    /** Invalid `animation.mode` values fall back to the default; optional allow-list override. */
    availableModes?: readonly MapAnimationModes[];
    pointModes?: readonly string[];
  };
  /**
   * Stack / multi-floor preview mode. Accepts a boolean shortcut or a full object
   * (`enabled`, `offset`, `switchFloorTime` in ms).
   */
  stackMode?:
    | boolean
    | {
        enabled?: boolean;
        offset?: number;
        switchFloorTime?: number;
      };
  beaconMode?: boolean;
  /** When `false`, service layers are not wired (core `servicesEnabled`). Default in RN HTML is `true`; override if needed. */
  servicesEnabled?: boolean;
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
  /** Fires for batch highlight (`locationsHighlighted`). */
  onLocationHighlighted?: () => void;
  onLevelsReady?: (data: LevelsReadyPayload) => void;
  onLevelReady?: (data: LevelReadyPayload) => void;
  /** Active navigation step / floor context (core `navigation` event). */
  onNavigationState?: (data: NavigationStatePayload | null) => void;
  onBeaconClicked?: (data: unknown) => void;
  onPositionChanged?: (data: unknown) => void;
  /** Single-location highlight (core `locationHighlighted`), distinct from batch {@link onLocationHighlighted}. */
  onSingleLocationHighlighted?: (data: unknown) => void;
  /** Tooltip “navigate here” (from `navigationClicked` in the WebView map). */
  onTooltipNavigationClick?: (data: TooltipNavigationClickData) => void;
  /** Tooltip “details” (`detailClicked`). */
  onTooltipDetailClick?: (data: TooltipDetailClickData) => void;
  /** Tooltip “enter building” (`enterBuildingClicked`). */
  onTooltipEnterBuildingClick?: (data: TooltipEnterBuildingClickData) => void;
  /** Tooltip close (`closeClicked`). */
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

/**
 * One leg in a multi-building / outdoor program (see `showNavigationWithMultiple` / `startNavigation`).
 */
export interface MultipleNavigationSegment {
  type?: string;
  building?: string;
  navigation: Route;
}

export type StartNavigationProgram = Route | MultipleNavigationSegment[];

/** Strings passed to the user pin and tooltip localisation helpers. */
export interface UpdateLocalizedParams {
  youAreHereText?: string;
  navigationText?: string;
  closeText?: string;
  detailText?: string;
  enterBuildingText?: string;
  floorText?: string;
}

/** Options shared by prev/next navigation step helpers. */
export interface NavigateStepOptions {
  autoMode?: boolean;
  zoomEnabled?: boolean;
  showPins?: boolean;
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
  showNavigationWithMultiple: (
    segments: MultipleNavigationSegment[],
    options?: {
      autoMode?: boolean;
      zoomEnabled?: boolean;
      showPins?: boolean;
      groupIndex?: number;
    }
  ) => void;
  /** Runs single-route or multi-segment navigation depending on payload shape. */
  startNavigation: (
    program: StartNavigationProgram,
    options?: {
      autoMode?: boolean;
      zoomEnabled?: boolean;
      showPins?: boolean;
    }
  ) => void;
  restartNavigation: () => void;
  prevNavigate: (options?: NavigateStepOptions) => void;
  nextNavigate: (options?: NavigateStepOptions) => void;
  prevBuildingNavigate: (options?: NavigateStepOptions) => void;
  nextBuildingNavigate: (options?: NavigateStepOptions) => void;
  enterBuilding: (buildingId: string) => void;
  exitBuilding: () => void;
  updateLocalized: (params: UpdateLocalizedParams) => void;
  changeNavigationPins: (params: {
    startPin?: string;
    endPin?: string;
  }) => void;
  resetNavigationPins: () => void;
  setCurrentLocationFromBlock: (locationId: LocationId) => void;
  setFloor: (
    floorNo: number,
    options?: { resetZoom?: boolean; hideLocation?: boolean }
  ) => void;
  /** Switch floor using level id (`switchLevelToId`). */
  setFloorById: (
    levelId: LevelId,
    options?: {
      resetZoom?: boolean;
      hideLocation?: boolean;
      autoMode?: boolean;
      willSwitchLevel?: boolean;
    }
  ) => void;
  highlightLocations: (
    ids: string[],
    options?: {
      type?: LocationTypes;
      zoomEnabled?: boolean;
      duration?: number;
    }
  ) => void;
  /** Highlight a single location by id (`highlightLocation`). */
  highlightLocation: (
    id: LocationId,
    options?: { zoomEnabled?: boolean; duration?: number }
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
  calculateSP: (
    startLocation: LocationId,
    endLocation: LocationId,
    routeType?: string
  ) => Promise<unknown>;
  calculateSP_v2: (
    startLocation: LocationId,
    endLocation: LocationId,
    routeType?: string
  ) => Promise<unknown>;
  getLevels: () => Promise<unknown>;
  getNodes: () => Promise<unknown>;
  getPaths: () => Promise<unknown>;
  isMultiBuilding: () => Promise<boolean>;
  getNavigationDetails: (offset?: number) => Promise<unknown>;
  prevLevelId: () => Promise<string | undefined>;
  nextLevelId: () => Promise<string | undefined>;
  hasPrevNavigate: () => Promise<boolean>;
  hasNextNavigate: () => Promise<boolean>;
  prevBuildingId: () => Promise<string | boolean | undefined>;
  nextBuildingId: () => Promise<string | boolean | undefined>;
  hasPrevBuildingNavigate: () => Promise<boolean>;
  hasNextBuildingNavigate: () => Promise<boolean>;
};
