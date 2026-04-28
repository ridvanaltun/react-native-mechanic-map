import * as React from 'react';
import { StyleSheet } from 'react-native';
import MechanicMap, {
  type MechanicMapHandle,
  type MechanicMapOptions,
  type MechanicMapPayload,
} from 'react-native-mechanic-map';

import type { MapPayloadId } from '../constants/data';
import { useDemoUiTheme } from './DemoUiThemeContext';

type PushMapEvent = (name: string, detail?: unknown) => void;

function optionsSignature(
  mapPayloadId: MapPayloadId,
  languageCode: string,
  options: MechanicMapOptions,
) {
  return `${mapPayloadId}|${languageCode}|${JSON.stringify(options)}`;
}

export function DemoMechanicMap({
  mapPayloadId,
  payload,
  mapRef,
  mapOptions,
  languageCode,
  onMapLoaded,
  onLevelSwitched,
  pushMapEvent,
}: {
  mapPayloadId: MapPayloadId;
  payload: MechanicMapPayload[];
  mapRef: React.RefObject<MechanicMapHandle | null>;
  mapOptions: MechanicMapOptions;
  languageCode: string;
  onMapLoaded: () => void;
  onLevelSwitched: (newLevel: { no: number }) => void;
  pushMapEvent: PushMapEvent;
}) {
  const { palette } = useDemoUiTheme();
  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: palette.shellBg,
        },
      }),
    [palette.shellBg],
  );

  const [bridgeReady, setBridgeReady] = React.useState(false);
  const lastAppliedSigRef = React.useRef<string | null>(null);

  React.useEffect(() => {
    setBridgeReady(false);
    lastAppliedSigRef.current = null;
  }, [mapPayloadId]);

  const handleMapLoaded = React.useCallback(() => {
    setBridgeReady(true);
    onMapLoaded();
  }, [onMapLoaded]);

  React.useEffect(() => {
    if (!bridgeReady) {
      return;
    }
    const sig = optionsSignature(mapPayloadId, languageCode, mapOptions);
    if (lastAppliedSigRef.current === null) {
      lastAppliedSigRef.current = sig;
      return;
    }
    if (lastAppliedSigRef.current === sig) {
      return;
    }
    lastAppliedSigRef.current = sig;
    mapRef.current?.init({
      languageCode,
      payload,
      options: mapOptions,
    });
  }, [
    bridgeReady,
    languageCode,
    mapOptions,
    mapPayloadId,
    mapRef,
    payload,
  ]);

  return (
    <MechanicMap
      key={mapPayloadId}
      ref={mapRef}
      languageCode={languageCode}
      payload={payload}
      style={styles.container}
      options={mapOptions}
      onMapLoaded={handleMapLoaded}
      onLevelSwitched={newLevel => {
        onLevelSwitched(newLevel);
        pushMapEvent('onLevelSwitched', newLevel);
      }}
      onLocationOpened={location =>
        pushMapEvent('onLocationOpened', location)
      }
      onLocationClosed={() => pushMapEvent('onLocationClosed')}
      onNavigationCancelled={() => pushMapEvent('onNavigationCancelled')}
      onLocationHighlighted={() => pushMapEvent('onLocationHighlighted')}
      onTooltipNavigationClick={data =>
        pushMapEvent('onTooltipNavigationClick', data)
      }
      onTooltipDetailClick={data =>
        pushMapEvent('onTooltipDetailClick', data)
      }
      onTooltipEnterBuildingClick={data =>
        pushMapEvent('onTooltipEnterBuildingClick', data)
      }
      onTooltipCloseClick={() => pushMapEvent('onTooltipCloseClick')}
      onMapError={data => pushMapEvent('onMapError', data)}
    />
  );
}
