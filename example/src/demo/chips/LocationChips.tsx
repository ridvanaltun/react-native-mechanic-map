import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import type { MechanicMapHandle } from 'react-native-mechanic-map';
import { LocationTypes } from 'react-native-mechanic-map';

import { Chip } from '../components/Chip';

type LocationItem = {
  id: string;
  type: string;
};

export function LocationChips({
  mapRef,
  locations,
}: {
  mapRef: React.RefObject<MechanicMapHandle | null>;
  locations: LocationItem[];
}) {
  return (
    <View style={styles.chipRow}>
      <Chip
        label="Highlight K0 stores"
        onPress={() => {
          const groundFloorStores = locations
            .filter(l => l.type === 'store')
            .filter(l => l.id[0] === 'K' && l.id[1] === '0')
            .map(l => l.id);

          mapRef.current?.highlightLocations(groundFloorStores, {
            type: LocationTypes.STORE,
          });
        }}
      />
      <Chip
        label="Random place"
        onPress={() => {
          const randomLocation =
            locations[Math.floor(Math.random() * locations.length - 1)];
          mapRef.current?.showLocation({
            id: randomLocation.id,
            type:
              randomLocation.type === LocationTypes.SERVICE
                ? LocationTypes.SERVICE
                : LocationTypes.STORE,
          });
        }}
      />
      <Chip
        label="Hide detail"
        variant="emphasis"
        onPress={() => mapRef.current?.hideLocation()}
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
