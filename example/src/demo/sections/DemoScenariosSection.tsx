import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { MechanicMapHandle } from 'react-native-mechanic-map';
import { LocationTypes } from 'react-native-mechanic-map';

import { FixtureARoutes, FixtureBRoutes, type MapPayloadId } from '../../constants/data';
import { Chip } from '../components/Chip';
import { useDemoUiTheme } from '../DemoUiThemeContext';

type Loc = { id: string; type: string };

export function DemoScenariosSection({
  mapRef,
  mapPayloadId,
  locations,
}: {
  mapRef: React.RefObject<MechanicMapHandle | null>;
  mapPayloadId: MapPayloadId;
  locations: Loc[];
}) {
  const { palette } = useDemoUiTheme();
  const hintStyle = React.useMemo(
    () => ({
      fontSize: 12,
      color: palette.textMuted,
      marginBottom: 10,
    }),
    [palette.textMuted],
  );

  const firstStore = locations.find(l => l.type === 'store');

  const scenarioOpenThenNavA = React.useCallback(() => {
    if (!firstStore) return;
    mapRef.current?.showLocation({
      id: firstStore.id,
      type: LocationTypes.STORE,
    });
    setTimeout(() => {
      mapRef.current?.showNavigation(FixtureARoutes.ROUTE_01);
    }, 900);
  }, [firstStore, mapRef]);

  const scenarioHighlightThenHide = React.useCallback(() => {
    const groundFloorStores = locations
      .filter(l => l.type === 'store')
      .filter(l => l.id[0] === 'K' && l.id[1] === '0')
      .map(l => l.id);
    if (groundFloorStores.length === 0) {
      const fallback = locations.filter(l => l.type === 'store').slice(0, 4);
      if (fallback.length === 0) return;
      mapRef.current?.highlightLocations(
        fallback.map(l => l.id),
        { type: LocationTypes.STORE },
      );
    } else {
      mapRef.current?.highlightLocations(groundFloorStores, {
        type: LocationTypes.STORE,
      });
    }
    setTimeout(() => mapRef.current?.hideLocation(), 1400);
  }, [locations, mapRef]);

  const scenarioFloorThenStoreA = React.useCallback(() => {
    if (!firstStore) return;
    mapRef.current?.setFloor(0, { resetZoom: true, hideLocation: true });
    setTimeout(() => {
      mapRef.current?.showLocation({
        id: firstStore.id,
        type: LocationTypes.STORE,
        moveAndZoom: true,
      });
    }, 500);
  }, [firstStore, mapRef]);

  const scenarioBRepro = React.useCallback(() => {
    mapRef.current?.showNavigation(FixtureBRoutes.ROUTE_01);
    setTimeout(() => mapRef.current?.closeNavigation(false), 1200);
  }, [mapRef]);

  if (mapPayloadId === 'fixtureA') {
    return (
      <View style={styles.block}>
        <Text style={hintStyle}>
          One-tap flows for quick smoke checks (Fixture A).
        </Text>
        <View style={styles.row}>
          <Chip
            label="Open store → ROUTE_01"
            variant="emphasis"
            onPress={scenarioOpenThenNavA}
          />
          <Chip
            label="Highlight → hide"
            onPress={scenarioHighlightThenHide}
          />
          <Chip
            label="Floor 0 → open store"
            onPress={scenarioFloorThenStoreA}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.block}>
      <Text style={hintStyle}>
        Fixture B: single-floor route, then close navigation without resetting
        level.
      </Text>
      <View style={styles.row}>
        <Chip label="ROUTE_01 → close (no reset)" onPress={scenarioBRepro} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    marginTop: 8,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
});
