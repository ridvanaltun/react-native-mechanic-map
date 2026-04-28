import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import type { MechanicMapHandle } from 'react-native-mechanic-map';

import {
  FixtureARoutes,
  FixtureBRoutes,
  type MapPayloadId,
} from '../../constants/data';
import { FIXTURE_A_ROUTE_CHIPS, FIXTURE_B_ROUTE_CHIPS } from '../constants';
import { Chip } from '../components/Chip';

export function NavigationChips({
  mapRef,
  mapPayloadId,
}: {
  mapRef: React.RefObject<MechanicMapHandle | null>;
  mapPayloadId: MapPayloadId;
}) {
  const closeChip = (
    <Chip
      key="close"
      label="Close nav (reset)"
      variant="emphasis"
      onPress={() => mapRef.current?.closeNavigation(true)}
    />
  );
  const closeKeepChip = (
    <Chip
      key="closeKeep"
      label="Close nav (keep level)"
      onPress={() => mapRef.current?.closeNavigation(false)}
    />
  );

  if (mapPayloadId === 'fixtureA') {
    return (
      <View style={styles.chipRow}>
        {FIXTURE_A_ROUTE_CHIPS.map(({ key, label }) => (
          <Chip
            key={key}
            label={label}
            onPress={() =>
              mapRef.current?.showNavigation(FixtureARoutes[key])
            }
          />
        ))}
        {closeChip}
        {closeKeepChip}
      </View>
    );
  }

  return (
    <View style={styles.chipRow}>
      {FIXTURE_B_ROUTE_CHIPS.map(({ key, label }) => (
        <Chip
          key={key}
          label={label}
          onPress={() =>
            mapRef.current?.showNavigation(FixtureBRoutes[key])
          }
        />
      ))}
      {closeChip}
      {closeKeepChip}
    </View>
  );
}

const styles = StyleSheet.create({
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 10,
  },
});
