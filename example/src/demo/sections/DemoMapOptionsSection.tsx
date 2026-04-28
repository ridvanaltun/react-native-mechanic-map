import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import type {
  MechanicMapOptions,
  MechanicMapRotateDegrees,
} from 'react-native-mechanic-map';

import { Chip } from '../components/Chip';
import {
  DemoFieldLabel,
  DemoSwitchRow,
  DemoTextInput,
} from '../components/DemoFormFields';
import { useDemoUiTheme } from '../DemoUiThemeContext';
import {
  createDefaultDemoMapOptions,
  DEMO_ANIMATION_MODES,
} from '../defaultDemoMapOptions';

const ROTATE_DEGREES: MechanicMapRotateDegrees[] = [0, 90, 180, 270];

export function DemoMapOptionsSection({
  languageCode,
  onLanguageCode,
  mapOptions,
  setMapOptions,
}: {
  languageCode: string;
  onLanguageCode: (code: string) => void;
  mapOptions: MechanicMapOptions;
  setMapOptions: React.Dispatch<React.SetStateAction<MechanicMapOptions>>;
}) {
  const { palette } = useDemoUiTheme();
  const tooltip = mapOptions.tooltip ?? {
    enabled: true,
    navigation: true,
    detail: true,
  };
  const textOnRect = mapOptions.textOnRect ?? {
    fontFamily: 'sans-serif',
    fillColor: '#FFF',
    fontSize: 8,
  };
  const animation = mapOptions.animation ?? {};

  const patchTooltip = (
    patch: Partial<NonNullable<MechanicMapOptions['tooltip']>>,
  ) =>
    setMapOptions(p => ({
      ...p,
      tooltip: {
        enabled: true,
        navigation: true,
        detail: true,
        ...p.tooltip,
        ...patch,
      },
    }));

  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        block: {
          gap: 4,
          marginTop: 8,
        },
        chipRow: {
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 8,
          marginBottom: 8,
        },
        divider: {
          height: StyleSheet.hairlineWidth,
          backgroundColor: palette.sectionDivider,
          marginVertical: 8,
        },
        hint: {
          fontSize: 12,
          color: palette.textMuted,
          marginTop: 4,
          marginBottom: 8,
        },
        hintMono: {
          fontFamily: Platform.select({ ios: 'Menlo', android: 'monospace' }),
          color: palette.text,
        },
      }),
    [palette],
  );

  return (
    <View style={styles.block}>
      <DemoFieldLabel>Map language</DemoFieldLabel>
      <View style={styles.chipRow}>
        {(['en', 'tr'] as const).map(code => (
          <Chip
            key={code}
            label={code.toUpperCase()}
            selected={languageCode === code}
            onPress={() => onLanguageCode(code)}
          />
        ))}
      </View>

      <DemoSwitchRow
        label="Draggable"
        value={mapOptions.draggable !== false}
        onValueChange={v => setMapOptions(p => ({ ...p, draggable: v }))}
      />
      <DemoSwitchRow
        label="Zoom gestures"
        value={mapOptions.zoom !== false}
        onValueChange={v => setMapOptions(p => ({ ...p, zoom: v }))}
      />
      <DemoSwitchRow
        label="Landmark"
        value={!!mapOptions.landmark}
        onValueChange={v => setMapOptions(p => ({ ...p, landmark: v }))}
      />
      <DemoSwitchRow
        label="Developer"
        value={!!mapOptions.developer}
        onValueChange={v => setMapOptions(p => ({ ...p, developer: v }))}
      />
      <DemoSwitchRow
        label="Hover tip"
        value={!!mapOptions.hoverTip}
        onValueChange={v => setMapOptions(p => ({ ...p, hoverTip: v }))}
      />
      <DemoSwitchRow
        label="Map fill"
        value={!!mapOptions.mapFill}
        onValueChange={v => setMapOptions(p => ({ ...p, mapFill: v }))}
      />
      <DemoSwitchRow
        label="Beacon mode"
        value={!!mapOptions.beaconMode}
        onValueChange={v => setMapOptions(p => ({ ...p, beaconMode: v }))}
      />
      <DemoSwitchRow
        label="Smartip"
        value={!!mapOptions.smartip}
        onValueChange={v => setMapOptions(p => ({ ...p, smartip: v }))}
      />

      <View style={styles.divider} />

      <DemoSwitchRow
        label="Tooltip enabled"
        value={tooltip.enabled !== false}
        onValueChange={v => patchTooltip({ enabled: v })}
      />
      <DemoSwitchRow
        label="Tooltip navigation"
        value={tooltip.navigation !== false}
        onValueChange={v => patchTooltip({ navigation: v })}
      />
      <DemoSwitchRow
        label="Tooltip detail"
        value={tooltip.detail !== false}
        onValueChange={v => patchTooltip({ detail: v })}
      />

      <View style={styles.divider} />

      <DemoFieldLabel>Rotate (degrees)</DemoFieldLabel>
      <View style={styles.chipRow}>
        {ROTATE_DEGREES.map(deg => (
          <Chip
            key={deg}
            label={`${deg}°`}
            selected={(mapOptions.rotate ?? 0) === deg}
            onPress={() => setMapOptions(p => ({ ...p, rotate: deg }))}
          />
        ))}
      </View>

      <DemoFieldLabel>Initial scale factor</DemoFieldLabel>
      <DemoTextInput
        keyboardType="decimal-pad"
        value={String(mapOptions.initialScaleFactor ?? 1)}
        onChangeText={t => {
          const n = parseFloat(t);
          if (t === '' || !Number.isFinite(n)) return;
          setMapOptions(p => ({ ...p, initialScaleFactor: n }));
        }}
      />

      <DemoFieldLabel>Max scale (empty = default)</DemoFieldLabel>
      <DemoTextInput
        keyboardType="decimal-pad"
        placeholder="e.g. 4"
        value={
          mapOptions.maxScale === undefined ? '' : String(mapOptions.maxScale)
        }
        onChangeText={t => {
          if (t.trim() === '') {
            setMapOptions(p => {
              const next = { ...p };
              delete next.maxScale;
              return next;
            });
            return;
          }
          const n = parseFloat(t);
          if (!Number.isFinite(n)) return;
          setMapOptions(p => ({ ...p, maxScale: n }));
        }}
      />

      <DemoFieldLabel>Label font size (textOnRect)</DemoFieldLabel>
      <DemoTextInput
        keyboardType="number-pad"
        value={String(textOnRect.fontSize ?? 8)}
        onChangeText={t => {
          const n = parseInt(t, 10);
          if (t === '' || !Number.isFinite(n)) return;
          setMapOptions(p => ({
            ...p,
            textOnRect: {
              fontFamily: 'sans-serif',
              fillColor: '#FFF',
              ...p.textOnRect,
              fontSize: n,
            },
          }));
        }}
      />

      <DemoFieldLabel>Animation mode</DemoFieldLabel>
      <View style={styles.chipRow}>
        {DEMO_ANIMATION_MODES.map(mode => (
          <Chip
            key={mode}
            label={mode}
            selected={animation.mode === mode}
            onPress={() =>
              setMapOptions(p => ({
                ...p,
                animation: { ...p.animation, mode },
              }))
            }
          />
        ))}
      </View>

      <DemoFieldLabel>Animation speed factor</DemoFieldLabel>
      <DemoTextInput
        keyboardType="decimal-pad"
        value={String(animation.speedFactor ?? 8)}
        onChangeText={t => {
          const n = parseFloat(t);
          if (t === '' || !Number.isFinite(n)) return;
          setMapOptions(p => ({
            ...p,
            animation: { ...p.animation, speedFactor: n },
          }));
        }}
      />

      <DemoFieldLabel>Animation frequency factor</DemoFieldLabel>
      <DemoTextInput
        keyboardType="decimal-pad"
        value={String(animation.frequencyFactor ?? 8)}
        onChangeText={t => {
          const n = parseFloat(t);
          if (t === '' || !Number.isFinite(n)) return;
          setMapOptions(p => ({
            ...p,
            animation: { ...p.animation, frequencyFactor: n },
          }));
        }}
      />

      <DemoSwitchRow
        label="Stack animation"
        value={!!animation.stackAnimation}
        onValueChange={v =>
          setMapOptions(p => ({
            ...p,
            animation: { ...p.animation, stackAnimation: v },
          }))
        }
      />

      <View style={styles.divider} />

      <Text style={styles.hint}>
        Changing these calls the map bridge{' '}
        <Text style={styles.hintMono}>init</Text> again (after the first
        load).
      </Text>

      <View style={styles.chipRow}>
        <Chip
          label="Reset map options"
          variant="emphasis"
          onPress={() => setMapOptions(createDefaultDemoMapOptions())}
        />
      </View>
    </View>
  );
}
