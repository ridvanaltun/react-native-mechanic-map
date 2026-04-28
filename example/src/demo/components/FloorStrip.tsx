import * as React from 'react';
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import type { MechanicMapHandle } from 'react-native-mechanic-map';

import { formatFloorLabel } from '../floorUtils';
import { useDemoUiTheme } from '../DemoUiThemeContext';
import type { DemoUiPalette } from '../theme';

export function FloorStrip({
  mapRef,
  insetsTop,
  floorNumbers,
  activeFloorNo,
  onSelectFloor,
}: {
  mapRef: React.RefObject<MechanicMapHandle | null>;
  insetsTop: number;
  floorNumbers: number[];
  activeFloorNo: number | null;
  onSelectFloor: (no: number) => void;
}) {
  const { palette } = useDemoUiTheme();
  const styles = React.useMemo(() => createFloorStyles(palette), [palette]);

  return (
    <View
      style={[styles.floorOverlay, { paddingTop: insetsTop + 8 }]}
      pointerEvents="box-none"
    >
      {floorNumbers.length > 0 ? (
        <View style={styles.floorStripCard}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            style={styles.floorPillsScroll}
            contentContainerStyle={styles.floorPillsScrollContent}
          >
            {floorNumbers.map(no => {
              const selected = activeFloorNo === no;
              return (
                <Pressable
                  key={no}
                  accessibilityRole="button"
                  accessibilityLabel={`Floor ${formatFloorLabel(no)}`}
                  accessibilityState={{ selected }}
                  onPress={() => {
                    onSelectFloor(no);
                    mapRef.current?.setFloor(no);
                  }}
                  android_ripple={{ color: palette.rippleMedium }}
                  style={({ pressed }) => [
                    styles.floorPill,
                    selected && styles.floorPillSelected,
                    pressed && styles.floorPillPressed,
                  ]}
                >
                  <Text
                    style={[
                      styles.floorPillText,
                      selected && styles.floorPillTextSelected,
                    ]}
                    numberOfLines={1}
                  >
                    {formatFloorLabel(no)}
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>
      ) : null}
    </View>
  );
}

function createFloorStyles(p: DemoUiPalette) {
  return StyleSheet.create({
    floorOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 30,
      backgroundColor: p.floorOverlayBg,
    },
    floorStripCard: {
      marginTop: 0,
      width: '100%',
      borderRadius: 0,
      paddingVertical: 11,
      paddingHorizontal: 12,
      backgroundColor: p.floorOverlayBg,
      borderTopWidth: StyleSheet.hairlineWidth,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: p.border,
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.18,
          shadowRadius: 6,
        },
        android: {
          elevation: 5,
        },
      }),
    },
    floorPillsScroll: {
      width: '100%',
    },
    floorPillsScrollContent: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      paddingRight: 6,
    },
    floorPill: {
      paddingHorizontal: 14,
      paddingVertical: 8,
      borderRadius: 10,
      backgroundColor: p.floorPillBg,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: p.floorPillBorder,
    },
    floorPillSelected: {
      backgroundColor: p.accentSoft,
      borderColor: p.floorPillSelectedBorder,
    },
    floorPillPressed: {
      opacity: 0.88,
    },
    floorPillText: {
      fontSize: 14,
      fontWeight: '700',
      color: p.textMuted,
    },
    floorPillTextSelected: {
      color: p.accent,
    },
  });
}
