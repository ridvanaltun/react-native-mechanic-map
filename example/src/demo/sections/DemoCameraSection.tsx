import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import type { MechanicMapHandle } from 'react-native-mechanic-map';

import { Chip } from '../components/Chip';
import { DemoFieldLabel, DemoTextInput } from '../components/DemoFormFields';

export function DemoCameraSection({
  mapRef,
}: {
  mapRef: React.RefObject<MechanicMapHandle | null>;
}) {
  const [x, setX] = React.useState('1200');
  const [y, setY] = React.useState('400');
  const [scale, setScale] = React.useState('1.5');
  const [duration, setDuration] = React.useState('500');
  const [easing, setEasing] = React.useState('easeOut');

  const parseNum = (t: string) => {
    const n = parseFloat(t);
    return Number.isFinite(n) ? n : null;
  };

  const opts = () => {
    const s = parseNum(scale);
    const d = parseNum(duration);
    return {
      ...(s != null ? { scale: s } : {}),
      ...(d != null ? { duration: d } : {}),
      ...(easing.trim() ? { easing: easing.trim() } : {}),
    };
  };

  const applyMoveTo = () => {
    const nx = parseNum(x);
    const ny = parseNum(y);
    if (nx == null || ny == null) return;
    mapRef.current?.moveTo(nx, ny, opts());
  };

  const applyZoomTo = () => {
    const nx = parseNum(x);
    const ny = parseNum(y);
    if (nx == null || ny == null) return;
    mapRef.current?.zoomTo(nx, ny, opts());
  };

  return (
    <View style={styles.block}>
      <DemoFieldLabel>X</DemoFieldLabel>
      <DemoTextInput keyboardType="decimal-pad" value={x} onChangeText={setX} />
      <DemoFieldLabel>Y</DemoFieldLabel>
      <DemoTextInput keyboardType="decimal-pad" value={y} onChangeText={setY} />
      <DemoFieldLabel>Scale (optional)</DemoFieldLabel>
      <DemoTextInput
        keyboardType="decimal-pad"
        value={scale}
        onChangeText={setScale}
      />
      <DemoFieldLabel>Duration ms (optional)</DemoFieldLabel>
      <DemoTextInput
        keyboardType="number-pad"
        value={duration}
        onChangeText={setDuration}
      />
      <DemoFieldLabel>Easing (optional)</DemoFieldLabel>
      <DemoTextInput
        value={easing}
        onChangeText={setEasing}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.row}>
        <Chip label="moveTo" variant="emphasis" onPress={applyMoveTo} />
        <Chip label="zoomTo" onPress={applyZoomTo} />
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
    gap: 10,
    marginTop: 12,
  },
});
