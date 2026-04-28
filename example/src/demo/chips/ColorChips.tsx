import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import type { Color, MechanicMapHandle } from 'react-native-mechanic-map';

import Utils from '../../utils';
import { Chip } from '../components/Chip';

type LocationLite = { id: string };

export function ColorChips({
  mapRef,
  locations,
}: {
  mapRef: React.RefObject<MechanicMapHandle | null>;
  locations: LocationLite[];
}) {
  return (
    <View style={styles.chipRow}>
      <Chip
        label="Random background"
        onPress={() =>
          mapRef.current?.changeColors({
            background: Utils.randomColor(),
          })
        }
      />
      <Chip
        label="Random locations"
        onPress={() =>
          mapRef.current?.changeColors({
            locations: locations.reduce<Record<string, Color>>(
              (previousValue, currentValue) => ({
                ...previousValue,
                [currentValue.id]: Utils.randomColor(),
              }),
              {},
            ),
          })
        }
      />
      <Chip
        label="Active stores"
        onPress={() =>
          mapRef.current?.changeColors({
            activeStores: Utils.randomColor(),
          })
        }
      />
      <Chip
        label="Inactive stores"
        onPress={() =>
          mapRef.current?.changeColors({
            inactiveStores: Utils.randomColor(),
          })
        }
      />
      <Chip
        label="Services"
        onPress={() =>
          mapRef.current?.changeColors({
            services: Utils.randomColor(),
          })
        }
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
