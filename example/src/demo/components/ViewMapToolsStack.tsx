import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import type { MechanicMapHandle } from 'react-native-mechanic-map';

import { ViewMapTool } from './ViewMapTool';

export function ViewMapToolsStack({
  mapRef,
  top,
}: {
  mapRef: React.RefObject<MechanicMapHandle | null>;
  top: number;
}) {
  return (
    <View style={[styles.viewToolsStack, { top }]} pointerEvents="box-none">
      <ViewMapTool
        icon="⊕"
        accessibilityLabel="Zoom in"
        onPress={() => mapRef.current?.zoomIn()}
      />
      <ViewMapTool
        icon="⊖"
        accessibilityLabel="Zoom out"
        onPress={() => mapRef.current?.zoomOut()}
      />
      <ViewMapTool
        icon="↺"
        accessibilityLabel="Reset level"
        onPress={() => mapRef.current?.resetLevel()}
      />
      <ViewMapTool
        icon="↻"
        accessibilityLabel="Reload map"
        emphasis
        onPress={() => mapRef.current?.reload()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewToolsStack: {
    position: 'absolute',
    right: 12,
    zIndex: 31,
    flexDirection: 'column',
    gap: 8,
    alignItems: 'flex-end',
  },
});
