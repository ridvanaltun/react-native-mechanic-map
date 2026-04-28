import * as React from 'react';
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { MAP_PAYLOADS, type MapPayloadId } from '../../constants/data';
import { useDemoUiTheme } from '../DemoUiThemeContext';
import type { DemoUiPalette } from '../theme';
import { Chip } from './Chip';

export function MapFooter({
  bottomPad,
  mapPayloadId,
  onMapPayloadId,
  panelVisible,
  onShowPanel,
  onFooterLayout,
}: {
  bottomPad: number;
  mapPayloadId: MapPayloadId;
  onMapPayloadId: (id: MapPayloadId) => void;
  panelVisible: boolean;
  onShowPanel: () => void;
  onFooterLayout: (height: number) => void;
}) {
  const { palette } = useDemoUiTheme();
  const styles = React.useMemo(() => createFooterStyles(palette), [palette]);

  return (
    <View
      onLayout={e => onFooterLayout(e.nativeEvent.layout.height)}
      style={[styles.footerChrome, { paddingBottom: bottomPad }]}
      pointerEvents="box-none"
    >
      <View style={styles.footerBottomRow} pointerEvents="box-none">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          style={styles.footerChipsScroll}
          contentContainerStyle={styles.footerMapDataChipsContent}
        >
          {(Object.keys(MAP_PAYLOADS) as MapPayloadId[]).map(id => (
            <Chip
              key={id}
              label={MAP_PAYLOADS[id].label}
              selected={mapPayloadId === id}
              onPress={() => onMapPayloadId(id)}
            />
          ))}
        </ScrollView>
        {!panelVisible ? (
          <Pressable
            onPress={onShowPanel}
            style={({ pressed }) => [
              styles.footerControlsBtn,
              pressed && styles.footerControlsBtnPressed,
            ]}
          >
            <Text style={styles.footerControlsBtnText}>Controls</Text>
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}

function createFooterStyles(p: DemoUiPalette) {
  return StyleSheet.create({
    footerChrome: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 18,
      paddingTop: 8,
      backgroundColor: p.panelBg,
      borderTopWidth: StyleSheet.hairlineWidth,
      borderTopColor: p.border,
    },
    footerBottomRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      paddingHorizontal: 12,
    },
    footerChipsScroll: {
      flex: 1,
      minWidth: 0,
    },
    footerMapDataChipsContent: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      paddingRight: 4,
      paddingVertical: 2,
    },
    footerControlsBtn: {
      paddingHorizontal: 16,
      paddingVertical: 10,
      borderRadius: 999,
      backgroundColor: p.surface,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: p.border,
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.22,
          shadowRadius: 4,
        },
        android: {
          elevation: 3,
        },
      }),
    },
    footerControlsBtnPressed: {
      opacity: 0.9,
      transform: [{ scale: 0.98 }],
    },
    footerControlsBtnText: {
      fontSize: 14,
      fontWeight: '700',
      color: p.accent,
    },
  });
}
