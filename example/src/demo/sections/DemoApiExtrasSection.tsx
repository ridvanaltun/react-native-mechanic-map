import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { LocationTypes, type MechanicMapHandle } from 'react-native-mechanic-map';

import type { MapPayloadId } from '../../constants/data';
import { Chip } from '../components/Chip';
import {
  DemoFieldLabel,
  DemoSwitchRow,
  DemoTextInput,
} from '../components/DemoFormFields';

type Loc = { id: string; type: string };

export function DemoApiExtrasSection({
  mapRef,
  mapPayloadId,
  locations,
}: {
  mapRef: React.RefObject<MechanicMapHandle | null>;
  mapPayloadId: MapPayloadId;
  locations: Loc[];
}) {
  const firstStore = locations.find(l => l.type === 'store');
  const [floorNo, setFloorNo] = React.useState('0');
  const [resetZoom, setResetZoom] = React.useState(true);
  const [hideLocation, setHideLocation] = React.useState(true);

  const [highlightIds, setHighlightIds] = React.useState('');
  const [hlType, setHlType] = React.useState<'store' | 'service'>('store');
  const [hlZoom, setHlZoom] = React.useState(true);
  const [hlDuration, setHlDuration] = React.useState('');

  const [slId, setSlId] = React.useState(() => firstStore?.id ?? '');
  const [slType, setSlType] = React.useState<'store' | 'service'>('store');
  const [slDuration, setSlDuration] = React.useState(true);
  const [slCloseNav, setSlCloseNav] = React.useState(true);
  const [slMoveZoom, setSlMoveZoom] = React.useState(true);

  React.useEffect(() => {
    const ids =
      locations
        .filter(l => l.type === 'store')
        .slice(0, 3)
        .map(l => l.id)
        .join(', ') || '';
    setHighlightIds(ids);
    const fs = locations.find(l => l.type === 'store');
    if (fs) {
      setSlId(fs.id);
    }
  }, [mapPayloadId, locations]);

  const applySetFloor = () => {
    const n = parseInt(floorNo, 10);
    if (!Number.isFinite(n)) return;
    mapRef.current?.setFloor(n, { resetZoom, hideLocation });
  };

  const applyHighlight = () => {
    const ids = highlightIds
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);
    if (ids.length === 0) return;
    const durRaw = hlDuration.trim();
    const d = durRaw === '' ? NaN : parseFloat(durRaw);
    const duration = Number.isFinite(d) ? d : undefined;
    mapRef.current?.highlightLocations(ids, {
      type: hlType === LocationTypes.SERVICE ? LocationTypes.SERVICE : LocationTypes.STORE,
      zoomEnabled: hlZoom,
      duration,
    });
  };

  const applyShowLocation = () => {
    const id = slId.trim();
    if (!id) return;
    mapRef.current?.showLocation({
      id,
      type: slType === LocationTypes.SERVICE ? LocationTypes.SERVICE : LocationTypes.STORE,
      duration: slDuration,
      closeNavigation: slCloseNav,
      moveAndZoom: slMoveZoom,
    });
  };

  return (
    <View style={styles.block}>
      <DemoFieldLabel>setFloor</DemoFieldLabel>
      <DemoTextInput
        keyboardType="number-pad"
        value={floorNo}
        onChangeText={setFloorNo}
      />
      <DemoSwitchRow
        label="resetZoom"
        value={resetZoom}
        onValueChange={setResetZoom}
      />
      <DemoSwitchRow
        label="hideLocation"
        value={hideLocation}
        onValueChange={setHideLocation}
      />
      <Chip label="Apply setFloor" variant="emphasis" onPress={applySetFloor} />

      <View style={styles.gap} />

      <DemoFieldLabel>highlightLocations (comma-separated ids)</DemoFieldLabel>
      <DemoTextInput
        value={highlightIds}
        onChangeText={setHighlightIds}
        multiline
      />
      <View style={styles.row}>
        <Chip
          label="store"
          selected={hlType === 'store'}
          onPress={() => setHlType('store')}
        />
        <Chip
          label="service"
          selected={hlType === 'service'}
          onPress={() => setHlType('service')}
        />
      </View>
      <DemoSwitchRow label="zoomEnabled" value={hlZoom} onValueChange={setHlZoom} />
      <DemoFieldLabel>duration (optional, ms)</DemoFieldLabel>
      <DemoTextInput
        keyboardType="decimal-pad"
        value={hlDuration}
        onChangeText={setHlDuration}
        placeholder="omit for default"
      />
      <Chip label="Highlight" onPress={applyHighlight} />

      <View style={styles.gap} />

      <DemoFieldLabel>showLocation id</DemoFieldLabel>
      <DemoTextInput value={slId} onChangeText={setSlId} autoCapitalize="none" />
      <View style={styles.row}>
        <Chip
          label="store"
          selected={slType === 'store'}
          onPress={() => setSlType('store')}
        />
        <Chip
          label="service"
          selected={slType === 'service'}
          onPress={() => setSlType('service')}
        />
      </View>
      <DemoSwitchRow
        label="duration"
        value={slDuration}
        onValueChange={setSlDuration}
      />
      <DemoSwitchRow
        label="closeNavigation"
        value={slCloseNav}
        onValueChange={setSlCloseNav}
      />
      <DemoSwitchRow
        label="moveAndZoom"
        value={slMoveZoom}
        onValueChange={setSlMoveZoom}
      />
      <Chip label="showLocation" variant="emphasis" onPress={applyShowLocation} />

      <View style={styles.gap} />

      <DemoFieldLabel>closeNavigation</DemoFieldLabel>
      <View style={styles.row}>
        <Chip
          label="resetLevel: true"
          onPress={() => mapRef.current?.closeNavigation(true)}
        />
        <Chip
          label="resetLevel: false"
          onPress={() => mapRef.current?.closeNavigation(false)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    gap: 4,
    marginTop: 8,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
  },
  gap: {
    height: 14,
  },
});
