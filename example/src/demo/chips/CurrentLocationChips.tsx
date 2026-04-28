import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import type { MechanicMapHandle } from 'react-native-mechanic-map';

import { Chip } from '../components/Chip';

export function CurrentLocationChips({
  mapRef,
}: {
  mapRef: React.RefObject<MechanicMapHandle | null>;
}) {
  return (
    <View style={styles.chipRow}>
      <Chip
        label="Set"
        onPress={() => mapRef.current?.setCurrentLocation(1000, 1000)}
      />
      <Chip
        label="Show"
        onPress={() => mapRef.current?.showCurrentLocation()}
      />
      <Chip
        label="Move"
        onPress={() =>
          mapRef.current?.moveCurrentLocation([
            { x: 1200, y: 1200 },
            { x: 1500, y: 1400 },
          ])
        }
      />
      <Chip
        label="Remove"
        onPress={() => mapRef.current?.removeCurrentLocation()}
      />
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
