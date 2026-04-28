import * as React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import { useDemoUiTheme } from '../DemoUiThemeContext';
import type { DemoUiPalette } from '../theme';

export function Chip({
  label,
  onPress,
  variant = 'default',
  selected,
  disabled,
}: {
  label: string;
  onPress: () => void;
  variant?: 'default' | 'emphasis';
  selected?: boolean;
  disabled?: boolean;
}) {
  const { palette } = useDemoUiTheme();
  const styles = React.useMemo(() => createChipStyles(palette), [palette]);

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      android_ripple={{ color: palette.rippleStrong }}
      style={({ pressed }) => [
        styles.chip,
        variant === 'emphasis' && styles.chipEmphasis,
        selected && styles.chipSelected,
        disabled && styles.chipDisabled,
        pressed && !disabled && styles.chipPressed,
      ]}
    >
      <Text
        style={[
          styles.chipLabel,
          variant === 'emphasis' && styles.chipLabelEmphasis,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

function createChipStyles(p: DemoUiPalette) {
  return StyleSheet.create({
    chip: {
      paddingHorizontal: 14,
      paddingVertical: 10,
      borderRadius: 999,
      backgroundColor: p.chipBg,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: p.chipBorder,
    },
    chipEmphasis: {
      backgroundColor: p.accentSoft,
      borderColor: p.chipEmphasisBorder,
    },
    chipSelected: {
      backgroundColor: p.chipSelectedBg,
      borderColor: p.chipSelectedBorder,
      borderWidth: 1.5,
    },
    chipPressed: {
      opacity: 0.88,
    },
    chipDisabled: {
      opacity: 0.45,
    },
    chipLabel: {
      fontSize: 13,
      fontWeight: '600',
      color: p.text,
    },
    chipLabelEmphasis: {
      color: p.accent,
    },
  });
}
