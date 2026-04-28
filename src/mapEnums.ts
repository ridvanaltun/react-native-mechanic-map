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
