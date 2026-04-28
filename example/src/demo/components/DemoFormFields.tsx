import * as React from 'react';
import {
  Platform,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
  type TextInputProps,
} from 'react-native';

import { useDemoUiTheme } from '../DemoUiThemeContext';
import type { DemoUiPalette } from '../theme';

export function DemoFieldLabel({ children }: { children: string }) {
  const { palette } = useDemoUiTheme();
  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        label: {
          fontSize: 12,
          fontWeight: '600',
          color: palette.textMuted,
          marginBottom: 6,
        },
      }),
    [palette.textMuted],
  );
  return <Text style={styles.label}>{children}</Text>;
}

export function DemoTextInput(
  props: TextInputProps & { mono?: boolean },
) {
  const { palette } = useDemoUiTheme();
  const styles = React.useMemo(() => createInputStyles(palette), [palette]);
  const { style, mono, ...rest } = props;
  return (
    <TextInput
      placeholderTextColor={palette.textMuted}
      style={[styles.input, mono && styles.inputMono, style]}
      {...rest}
    />
  );
}

function createInputStyles(p: DemoUiPalette) {
  return StyleSheet.create({
    input: {
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: p.border,
      borderRadius: 10,
      paddingHorizontal: 12,
      paddingVertical: 10,
      fontSize: 15,
      color: p.text,
      backgroundColor: p.surface,
    },
    inputMono: {
      fontFamily: Platform.select({ ios: 'Menlo', android: 'monospace' }),
    },
  });
}

export function DemoSwitchRow({
  label,
  value,
  onValueChange,
}: {
  label: string;
  value: boolean;
  onValueChange: (v: boolean) => void;
}) {
  const { palette } = useDemoUiTheme();
  const styles = React.useMemo(() => createRowStyles(palette), [palette]);
  return (
    <View style={styles.row}>
      <Text style={styles.rowLabel}>{label}</Text>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: palette.border, true: palette.accentSoft }}
        thumbColor={value ? palette.accent : palette.textMuted}
      />
    </View>
  );
}

function createRowStyles(p: DemoUiPalette) {
  return StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 8,
      gap: 12,
    },
    rowLabel: {
      flex: 1,
      fontSize: 14,
      color: p.text,
      fontWeight: '500',
    },
  });
}
