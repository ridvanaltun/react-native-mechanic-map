import {
  MapActionModes,
  MapAnimationModes,
  MapModes,
  type MechanicMapOptions,
} from 'react-native-mechanic-map';

export function createDefaultDemoMapOptions(): MechanicMapOptions {
  return {
    mode: MapModes.DEFAULT,
    action: MapActionModes.TOOLTIP,
    rotate: 90,
    initialScaleFactor: 1.25,
    draggable: true,
    zoom: true,
    zoomToSelected: true,
    mouseWheel: false,
    landmark: false,
    developer: false,
    hoverTip: false,
    mapFill: false,
    beaconMode: false,
    smartip: false,
    tooltip: {
      enabled: true,
      navigation: true,
      detail: true,
    },
    textOnRect: {
      fontFamily: 'sans-serif',
      fillColor: '#FFF',
      fontSize: 8,
    },
    animation: {
      mode: MapAnimationModes.LINE,
      frequencyFactor: 8,
      speedFactor: 8,
      stackAnimation: false,
    },
  };
}

export const DEMO_ANIMATION_MODES = [
  MapAnimationModes.LINE,
  MapAnimationModes.DOT,
  MapAnimationModes.ARROW,
  MapAnimationModes.FOOT,
  MapAnimationModes.FEET,
] as const;
