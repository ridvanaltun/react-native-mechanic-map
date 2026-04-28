import * as React from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

import { useDemoUiTheme } from '../DemoUiThemeContext';
import type { DemoUiPalette } from '../theme';

export function ExpandableSection({
  title,
  expanded,
  onToggle,
  children,
}: {
  title: string;
  expanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  const { palette } = useDemoUiTheme();
  const styles = React.useMemo(
    () => createExpandableStyles(palette),
    [palette],
  );

  return (
    <View style={styles.section}>
      <Pressable
        onPress={onToggle}
        android_ripple={{ color: palette.rippleMedium }}
        style={({ pressed }) => [
          styles.sectionHeader,
          pressed && Platform.OS === 'ios' && styles.sectionHeaderPressed,
        ]}
      >
        <Text style={styles.sectionChevron}>{expanded ? '▼' : '▶'}</Text>
        <Text style={styles.sectionTitle}>{title}</Text>
      </Pressable>
      {expanded ? <View style={styles.sectionBody}>{children}</View> : null}
    </View>
  );
}

function createExpandableStyles(p: DemoUiPalette) {
  return StyleSheet.create({
    section: {
      marginBottom: 10,
      borderRadius: 12,
      overflow: 'hidden',
      backgroundColor: p.surface,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: p.sectionBorder,
    },
    sectionHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 12,
      paddingHorizontal: 12,
    },
    sectionHeaderPressed: {
      backgroundColor: p.surfacePressed,
    },
    sectionChevron: {
      fontSize: 10,
      color: p.textMuted,
      marginRight: 10,
      width: 14,
    },
    sectionTitle: {
      flex: 1,
      fontSize: 15,
      fontWeight: '600',
      color: p.text,
    },
    sectionBody: {
      paddingHorizontal: 10,
      paddingBottom: 12,
      paddingTop: 0,
      borderTopWidth: StyleSheet.hairlineWidth,
      borderTopColor: p.sectionDivider,
    },
  });
}
