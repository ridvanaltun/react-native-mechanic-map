import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {
  LocationTypes,
  type MechanicMapHandle,
  type MultipleNavigationSegment,
} from 'react-native-mechanic-map';

import type { MapPayloadId } from '../../constants/data';
import {
  FixtureARoutes,
  FixtureBRoutes,
  MAP_PAYLOADS,
} from '../../constants/data';
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

  const floors = MAP_PAYLOADS[mapPayloadId].payload;
  const firstLevelId = floors[0]?.id ?? '';
  const [floorById, setFloorById] = React.useState('');
  const [highlightOneId, setHighlightOneId] = React.useState('');
  const [buildingIdText, setBuildingIdText] = React.useState('');
  const [pinFromBlockId, setPinFromBlockId] = React.useState('');
  const [navStartPin, setNavStartPin] = React.useState('');
  const [navEndPin, setNavEndPin] = React.useState('');

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
    const levelIds = MAP_PAYLOADS[mapPayloadId].payload;
    setFloorById(levelIds[0]?.id ?? '');
    setHighlightOneId(fs?.id ?? '');
    setPinFromBlockId(fs?.id ?? '');
  }, [mapPayloadId, locations]);

  const routesFixture =
    mapPayloadId === 'fixtureA' ? FixtureARoutes : FixtureBRoutes;

  const demoMultiSegments: MultipleNavigationSegment[] = React.useMemo(() => {
    const r =
      mapPayloadId === 'fixtureA' ? FixtureARoutes : FixtureBRoutes;
    return [
      { type: 'outdoor', navigation: r.ROUTE_01 },
      { type: 'outdoor', navigation: r.ROUTE_02 },
    ];
  }, [mapPayloadId]);

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

      <View style={styles.gap} />
      <DemoFieldLabel>Extended ref API (bridge)</DemoFieldLabel>
      <Text style={styles.note}>
        Same methods as <Text style={styles.noteMono}>MechanicMapHandle</Text> in
        the library; useful for parity with the embedded map script.
      </Text>

      <DemoFieldLabel>setFloorById (level id)</DemoFieldLabel>
      <DemoTextInput
        value={floorById}
        onChangeText={setFloorById}
        autoCapitalize="none"
        placeholder={firstLevelId || 'level id'}
      />
      <Chip
        label="Apply setFloorById"
        onPress={() => {
          const id = floorById.trim();
          if (!id) return;
          mapRef.current?.setFloorById(id);
        }}
      />

      <DemoFieldLabel>highlightLocation (single id)</DemoFieldLabel>
      <DemoTextInput
        value={highlightOneId}
        onChangeText={setHighlightOneId}
        autoCapitalize="none"
      />
      <Chip
        label="highlightLocation"
        onPress={() => {
          const id = highlightOneId.trim();
          if (!id) return;
          mapRef.current?.highlightLocation(id, { zoomEnabled: true });
        }}
      />

      <View style={styles.row}>
        <Chip
          label="startNavigation (ROUTE_01)"
          onPress={() =>
            mapRef.current?.startNavigation(routesFixture.ROUTE_01)
          }
        />
        <Chip
          label="restartNavigation"
          onPress={() => mapRef.current?.restartNavigation()}
        />
      </View>

      <View style={styles.row}>
        <Chip label="prevNavigate" onPress={() => mapRef.current?.prevNavigate()} />
        <Chip label="nextNavigate" onPress={() => mapRef.current?.nextNavigate()} />
      </View>
      <View style={styles.row}>
        <Chip
          label="prevBuildingNavigate"
          onPress={() => mapRef.current?.prevBuildingNavigate()}
        />
        <Chip
          label="nextBuildingNavigate"
          onPress={() => mapRef.current?.nextBuildingNavigate()}
        />
      </View>

      <Chip
        label="showNavigationWithMultiple (2 outdoor legs)"
        onPress={() =>
          mapRef.current?.showNavigationWithMultiple(demoMultiSegments)
        }
      />

      <DemoFieldLabel>enterBuilding (building id)</DemoFieldLabel>
      <DemoTextInput
        value={buildingIdText}
        onChangeText={setBuildingIdText}
        autoCapitalize="none"
        placeholder="optional"
      />
      <View style={styles.row}>
        <Chip
          label="enterBuilding"
          onPress={() =>
            mapRef.current?.enterBuilding(buildingIdText.trim() || 'demo')
          }
        />
        <Chip label="exitBuilding" onPress={() => mapRef.current?.exitBuilding()} />
      </View>

      <Chip
        label="updateLocalized (sample strings)"
        onPress={() =>
          mapRef.current?.updateLocalized({
            youAreHereText: 'Buradasınız',
            navigationText: 'Navigasyon',
            closeText: 'Kapat',
          })
        }
      />

      <DemoFieldLabel>changeNavigationPins</DemoFieldLabel>
      <Text style={styles.pinHint}>
        Start / end marker image URLs (https://…). Apply while a navigation
        route is active; leave a field empty to skip that pin.
      </Text>
      <DemoTextInput
        placeholder="startPin URL"
        value={navStartPin}
        onChangeText={setNavStartPin}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <DemoTextInput
        placeholder="endPin URL"
        value={navEndPin}
        onChangeText={setNavEndPin}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.row}>
        <Chip
          label="Apply changeNavigationPins"
          variant="emphasis"
          onPress={() => {
            const start = navStartPin.trim();
            const end = navEndPin.trim();
            if (!start && !end) return;
            mapRef.current?.changeNavigationPins({
              ...(start ? { startPin: start } : {}),
              ...(end ? { endPin: end } : {}),
            });
          }}
        />
      </View>

      <View style={styles.row}>
        <Chip
          label="resetNavigationPins"
          onPress={() => mapRef.current?.resetNavigationPins()}
        />
      </View>

      <DemoFieldLabel>setCurrentLocationFromBlock</DemoFieldLabel>
      <DemoTextInput
        value={pinFromBlockId}
        onChangeText={setPinFromBlockId}
        autoCapitalize="none"
      />
      <Chip
        label="Apply"
        onPress={() => {
          const id = pinFromBlockId.trim();
          if (!id) return;
          mapRef.current?.setCurrentLocationFromBlock(id);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    gap: 4,
    marginTop: 8,
  },
  note: {
    fontSize: 11,
    opacity: 0.75,
    marginBottom: 8,
  },
  noteMono: {
    fontFamily: Platform.select({ ios: 'Menlo', android: 'monospace' }),
  },
  pinHint: {
    fontSize: 11,
    opacity: 0.75,
    marginBottom: 6,
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
