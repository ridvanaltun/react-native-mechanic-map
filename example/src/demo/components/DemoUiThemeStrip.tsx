import * as React from 'react';
import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { useDemoUiTheme } from '../DemoUiThemeContext';
import { DEMO_UI_THEME_OPTIONS } from '../theme';

export function DemoUiThemeStrip() {
  const { themeId, setThemeId, palette } = useDemoUiTheme();

  return (
    <View style={[styles.wrap, { borderColor: palette.sectionBorder }]}>
      <Text style={[styles.caption, { color: palette.textMuted }]}>
        Demo UI
      </Text>
      <View style={styles.row}>
        {DEMO_UI_THEME_OPTIONS.map(opt => {
          const selected = themeId === opt.id;
          return (
            <Pressable
              key={opt.id}
              onPress={() => setThemeId(opt.id)}
              android_ripple={{ color: palette.rippleMedium }}
              style={({ pressed }) => [
                styles.option,
                {
                  backgroundColor: palette.surface,
                  borderColor: selected
                    ? palette.accent
                    : palette.border,
                },
                pressed && Platform.OS === 'ios' && { opacity: 0.9 },
              ]}
            >
              <View
                style={[
                  styles.swatch,
                  {
                    backgroundColor: opt.swatch,
                    borderColor: palette.border,
                  },
                ]}
              />
              <Text
                style={[
                  styles.optionLabel,
                  { color: selected ? palette.accent : palette.text },
                ]}
                numberOfLines={1}
              >
                {opt.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginHorizontal: 16,
    marginBottom: 14,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: StyleSheet.hairlineWidth,
  },
  caption: {
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.35,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    gap: 8,
  },
  option: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
  },
  swatch: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: StyleSheet.hairlineWidth,
  },
  optionLabel: {
    fontSize: 13,
    fontWeight: '700',
  },
});
