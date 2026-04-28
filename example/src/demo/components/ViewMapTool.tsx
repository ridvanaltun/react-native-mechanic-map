import * as React from 'react';
import { Platform, Pressable, StyleSheet, Text } from 'react-native';

import { useDemoUiTheme } from '../DemoUiThemeContext';
import type { DemoUiPalette } from '../theme';

export function ViewMapTool({
  icon,
  accessibilityLabel,
  onPress,
  emphasis,
}: {
  icon: string;
  accessibilityLabel: string;
  onPress: () => void;
  emphasis?: boolean;
}) {
  const { palette } = useDemoUiTheme();
  const styles = React.useMemo(
    () => createViewMapToolStyles(palette),
    [palette],
  );

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      android_ripple={{ color: palette.rippleMedium }}
      hitSlop={6}
      style={({ pressed }) => [
        styles.viewMapTool,
        emphasis && styles.viewMapToolEmphasis,
        pressed && styles.viewMapToolPressed,
      ]}
    >
      <Text
        style={[
          styles.viewMapToolIcon,
          emphasis && styles.viewMapToolIconEmphasis,
        ]}
      >
        {icon}
      </Text>
    </Pressable>
  );
}

function createViewMapToolStyles(p: DemoUiPalette) {
  return StyleSheet.create({
    viewMapTool: {
      width: 36,
      height: 36,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: p.panelBg,
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
          elevation: 4,
        },
      }),
    },
    viewMapToolEmphasis: {
      backgroundColor: p.accentSoft,
      borderColor: p.viewMapToolEmphasisBorder,
    },
    viewMapToolPressed: {
      opacity: 0.88,
    },
    viewMapToolIcon: {
      fontSize: 17,
      fontWeight: '600',
      color: p.text,
      textAlign: 'center',
      lineHeight: 20,
      ...(Platform.OS === 'android' ? { fontFamily: 'sans-serif' } : {}),
    },
    viewMapToolIconEmphasis: {
      color: p.accent,
    },
  });
}
