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
  CHANGE_COLORS = 'changeColors',
  RELOAD = 'reload',
  /** `switchLevelToId` — floor by level id instead of floor number */
  SELECT_FLOOR_BY_ID = 'selectFloorById',
  /** Single-location highlight (`highlightLocation`) */
  HIGHLIGHT_LOCATION = 'highlightLocation',
  /** Multi-segment building navigation (`showNavigationWithMultiple`) */
  SHOW_NAVIGATION_MULTIPLE = 'showNavigationWithMultiple',
  /** Chooses single or multi flow (`startNavigation`) */
  START_NAVIGATION = 'startNavigation',
  /** Replay last program (`restartNavigation`) */
  RESTART_NAVIGATION = 'restartNavigation',
  PREV_NAVIGATE = 'prevNavigate',
  NEXT_NAVIGATE = 'nextNavigate',
  PREV_BUILDING_NAVIGATE = 'prevBuildingNavigate',
  NEXT_BUILDING_NAVIGATE = 'nextBuildingNavigate',
  ENTER_BUILDING = 'enterBuilding',
  EXIT_BUILDING = 'exitBuilding',
  UPDATE_LOCALIZED = 'updateLocalized',
  CHANGE_NAVIGATION_PINS = 'changeNavigationPins',
  RESET_NAVIGATION_PINS = 'resetNavigationPins',
  SET_CURRENT_LOCATION_FROM_BLOCK = 'setCurrentLocationFromBlock',
  /** Shortest-path v1 (`calculateSP`); responds via {@link MapResponses.BRIDGE_RESULT}. */
  CALCULATE_SP = 'calculateSP',
  /** Shortest-path v2 (`calculateSP_v2`); responds via {@link MapResponses.BRIDGE_RESULT}. */
  CALCULATE_SP_V2 = 'calculateSP_v2',
  GET_LEVELS = 'getLevels',
  GET_NODES = 'getNodes',
  GET_PATHS = 'getPaths',
  IS_MULTI_BUILDING = 'isMultiBuilding',
  GET_NAVIGATION_DETAILS = 'getNavigationDetails',
  PREV_LEVEL_ID = 'prevLevelId',
  NEXT_LEVEL_ID = 'nextLevelId',
  HAS_PREV_NAVIGATE = 'hasPrevNavigate',
  HAS_NEXT_NAVIGATE = 'hasNextNavigate',
  PREV_BUILDING_ID = 'prevBuildingId',
  NEXT_BUILDING_ID = 'nextBuildingId',
  HAS_PREV_BUILDING_NAVIGATE = 'hasPrevBuildingNavigate',
  HAS_NEXT_BUILDING_NAVIGATE = 'hasNextBuildingNavigate',
}

export enum MapResponses {
  MAP_LOADED = 'mapLoaded',
  LOCATION_OPENED = 'locationOpened',
  LOCATION_CLOSED = 'locationClosed',
  LEVEL_SWITCHED = 'levelSwitched',
  LOCATION_HIGHLIGHTED = 'locationsHighlighted',
  NAVIGATION_CANCELLED = 'navigationCancelled',
  TOOLTIP_NAVIGATION_CLICKED = 'navigationClicked',
  TOOLTIP_DETAIL_CLICKED = 'detailClicked',
  TOOLTIP_ENTER_BUILDING_CLICKED = 'enterBuildingClicked',
  TOOLTIP_CLOSE_CLICKED = 'closeClicked',
  ERROR = 'error',
  /** All floors processed — floor picker (`levelsReady` in core). */
  LEVELS_READY = 'levelsReady',
  /** One floor SVG ready (`levelReady` in core). */
  LEVEL_READY = 'levelReady',
  /** Navigation UI state during active routing (`navigation` in core). */
  NAVIGATION_STATE = 'navigation',
  BEACON_CLICKED = 'beaconClicked',
  POSITION_CHANGED = 'positionChanged',
  /** Single-location highlight (`locationHighlighted` in core; plural batch remains {@link LOCATION_HIGHLIGHTED}). */
  LOCATION_HIGHLIGHTED_SINGLE = 'locationHighlighted',
  /** Async reply for {@link MapActions} query commands (calculateSP, getLevels, …). */
  BRIDGE_RESULT = 'bridgeResult',
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
