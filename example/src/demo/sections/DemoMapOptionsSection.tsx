import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {
  MapActionModes,
  MapModes,
  type MechanicMapOptions,
  type MechanicMapRotateDegrees,
  type MechanicMapTextOnRectMode,
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

const MAP_ACTION_CHIP_ORDER = [
  MapActionModes.DEFAULT,
  MapActionModes.TOOLTIP,
  MapActionModes.SELECT,
  MapActionModes.ZOOM,
  MapActionModes.NOT_EMPTY,
] as const;

const TEXT_ON_RECT_MODE_CHIPS: MechanicMapTextOnRectMode[] = [
  'static',
  'dynamic',
];

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
  const textOnRect =
    typeof mapOptions.textOnRect === 'object' && mapOptions.textOnRect !== null
      ? mapOptions.textOnRect
      : {
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

      <DemoFieldLabel>Map mode</DemoFieldLabel>
      <View style={styles.chipRow}>
        <Chip
          label="Default"
          selected={mapOptions.mode !== MapModes.PICKER}
          onPress={() =>
            setMapOptions(p => ({ ...p, mode: MapModes.DEFAULT }))
          }
        />
        <Chip
          label="Picker"
          selected={mapOptions.mode === MapModes.PICKER}
          onPress={() =>
            setMapOptions(p => ({ ...p, mode: MapModes.PICKER }))
          }
        />
      </View>

      <DemoFieldLabel>Click action (`action`)</DemoFieldLabel>
      <View style={styles.chipRow}>
        {MAP_ACTION_CHIP_ORDER.map(act => (
          <Chip
            key={act}
            label={act}
            selected={mapOptions.action === act}
            onPress={() => setMapOptions(p => ({ ...p, action: act }))}
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
      <DemoSwitchRow
        label="Zoom to selected"
        value={mapOptions.zoomToSelected !== false}
        onValueChange={v => setMapOptions(p => ({ ...p, zoomToSelected: v }))}
      />
      <DemoSwitchRow
        label="Rotatable content"
        value={!!mapOptions.rotatable}
        onValueChange={v => setMapOptions(p => ({ ...p, rotatable: v }))}
      />
      <DemoSwitchRow
        label="Mouse wheel zoom"
        value={mapOptions.mouseWheel !== false}
        onValueChange={v => setMapOptions(p => ({ ...p, mouseWheel: v }))}
      />
      <DemoSwitchRow
        label="CSS path animation"
        value={mapOptions.cssAnimation !== false}
        onValueChange={v => setMapOptions(p => ({ ...p, cssAnimation: v }))}
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
      <DemoSwitchRow
        label="Tooltip enter building"
        value={tooltip.enterBuilding === true}
        onValueChange={v => patchTooltip({ enterBuilding: v })}
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
        placeholder="default 1"
        value={
          mapOptions.initialScaleFactor === undefined
            ? ''
            : String(mapOptions.initialScaleFactor)
        }
        onChangeText={t => {
          if (t.trim() === '') {
            setMapOptions(p => {
              const next = { ...p };
              delete next.initialScaleFactor;
              return next;
            });
            return;
          }
          const n = parseFloat(t);
          if (!Number.isFinite(n)) return;
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

      <DemoFieldLabel>Zoom limit (empty = default)</DemoFieldLabel>
      <Text style={styles.hint}>
        The map derives max scale from this when present; leave empty to use{' '}
        <Text style={styles.hintMono}>maxScale</Text> instead.
      </Text>
      <DemoTextInput
        keyboardType="decimal-pad"
        placeholder="e.g. 3"
        value={
          mapOptions.zoomLimit === undefined ? '' : String(mapOptions.zoomLimit)
        }
        onChangeText={t => {
          if (t.trim() === '') {
            setMapOptions(p => {
              const next = { ...p };
              delete next.zoomLimit;
              return next;
            });
            return;
          }
          const n = parseFloat(t);
          if (!Number.isFinite(n)) return;
          setMapOptions(p => ({ ...p, zoomLimit: n }));
        }}
      />

      <DemoFieldLabel>Animation scale (empty = default)</DemoFieldLabel>
      <DemoTextInput
        keyboardType="decimal-pad"
        placeholder="default 1.5"
        value={
          mapOptions.animationScale === undefined
            ? ''
            : String(mapOptions.animationScale)
        }
        onChangeText={t => {
          if (t.trim() === '') {
            setMapOptions(p => {
              const next = { ...p };
              delete next.animationScale;
              return next;
            });
            return;
          }
          const n = parseFloat(t);
          if (!Number.isFinite(n)) return;
          setMapOptions(p => ({ ...p, animationScale: n }));
        }}
      />

      <DemoFieldLabel>CSS animation time ms (empty = default)</DemoFieldLabel>
      <DemoTextInput
        keyboardType="number-pad"
        placeholder="e.g. 1000"
        value={
          mapOptions.cssAnimationTime === undefined
            ? ''
            : String(mapOptions.cssAnimationTime)
        }
        onChangeText={t => {
          if (t.trim() === '') {
            setMapOptions(p => {
              const next = { ...p };
              delete next.cssAnimationTime;
              return next;
            });
            return;
          }
          const n = parseInt(t, 10);
          if (!Number.isFinite(n)) return;
          setMapOptions(p => ({ ...p, cssAnimationTime: n }));
        }}
      />

      <DemoFieldLabel>Map container height px (empty = default)</DemoFieldLabel>
      <DemoTextInput
        keyboardType="number-pad"
        placeholder="default 420"
        value={
          mapOptions.height === undefined ? '' : String(mapOptions.height)
        }
        onChangeText={t => {
          if (t.trim() === '') {
            setMapOptions(p => {
              const next = { ...p };
              delete next.height;
              return next;
            });
            return;
          }
          const n = parseInt(t, 10);
          if (!Number.isFinite(n)) return;
          setMapOptions(p => ({ ...p, height: n }));
        }}
      />

      <DemoFieldLabel>Helper: “You are here” (empty = default)</DemoFieldLabel>
      <DemoTextInput
        placeholder="You are here"
        value={mapOptions.helperTexts?.youAreHere ?? ''}
        onChangeText={t => {
          if (t.trim() === '') {
            setMapOptions(p => {
              const next = { ...p };
              if (next.helperTexts) {
                const rest = { ...next.helperTexts };
                delete rest.youAreHere;
                next.helperTexts =
                  Object.keys(rest).length > 0 ? rest : undefined;
              }
              return next;
            });
            return;
          }
          setMapOptions(p => ({
            ...p,
            helperTexts: { ...p.helperTexts, youAreHere: t },
          }));
        }}
      />

      <DemoFieldLabel>Fill color (empty = default)</DemoFieldLabel>
      <DemoTextInput
        placeholder="# hex or leave empty"
        value={mapOptions.fillColor ?? ''}
        onChangeText={t => {
          if (t.trim() === '') {
            setMapOptions(p => {
              const next = { ...p };
              delete next.fillColor;
              return next;
            });
            return;
          }
          setMapOptions(p => ({ ...p, fillColor: t }));
        }}
      />

      <DemoFieldLabel>Stroke width (empty = default)</DemoFieldLabel>
      <DemoTextInput
        keyboardType="decimal-pad"
        placeholder="e.g. 8"
        value={
          mapOptions.strokeOptions?.width === undefined
            ? ''
            : String(mapOptions.strokeOptions.width)
        }
        onChangeText={t => {
          if (t.trim() === '') {
            setMapOptions(p => {
              const next = { ...p };
              if (next.strokeOptions) {
                const rest = { ...next.strokeOptions };
                delete rest.width;
                next.strokeOptions =
                  Object.keys(rest).length > 0 ? rest : undefined;
              }
              return next;
            });
            return;
          }
          const n = parseFloat(t);
          if (!Number.isFinite(n)) return;
          setMapOptions(p => ({
            ...p,
            strokeOptions: { ...p.strokeOptions, width: n },
          }));
        }}
      />

      <DemoSwitchRow
        label="Stack mode"
        value={
          mapOptions.stackMode === true ||
          (typeof mapOptions.stackMode === 'object' &&
            mapOptions.stackMode != null &&
            mapOptions.stackMode.enabled !== false)
        }
        onValueChange={v => {
          if (!v) {
            setMapOptions(p => {
              const next = { ...p };
              delete next.stackMode;
              return next;
            });
            return;
          }
          setMapOptions(p => ({ ...p, stackMode: true }));
        }}
      />

      <DemoFieldLabel>Label font size (textOnRect)</DemoFieldLabel>
      <DemoTextInput
        keyboardType="number-pad"
        placeholder="default 8"
        value={
          textOnRect.fontSize === undefined ? '' : String(textOnRect.fontSize)
        }
        onChangeText={t => {
          if (t.trim() === '') {
            setMapOptions(p => {
              const prev =
                typeof p.textOnRect === 'object' && p.textOnRect !== null
                  ? p.textOnRect
                  : {};
              const rest = { ...prev };
              delete rest.fontSize;
              return {
                ...p,
                textOnRect: {
                  fontFamily: 'sans-serif',
                  fillColor: '#FFF',
                  ...rest,
                },
              };
            });
            return;
          }
          const n = parseInt(t, 10);
          if (!Number.isFinite(n)) return;
          setMapOptions(p => {
            const prev =
              typeof p.textOnRect === 'object' && p.textOnRect !== null
                ? p.textOnRect
                : {};
            return {
              ...p,
              textOnRect: {
                fontFamily: 'sans-serif',
                fillColor: '#FFF',
                ...prev,
                fontSize: n,
              },
            };
          });
        }}
      />

      <DemoFieldLabel>Rect label mode (`textOnRect.mode`)</DemoFieldLabel>
      <View style={styles.chipRow}>
        {TEXT_ON_RECT_MODE_CHIPS.map(m => (
          <Chip
            key={m}
            label={m}
            selected={textOnRect.mode === m}
            onPress={() =>
              setMapOptions(p => {
                const prev =
                  typeof p.textOnRect === 'object' && p.textOnRect !== null
                    ? p.textOnRect
                    : {};
                return {
                  ...p,
                  textOnRect: {
                    fontFamily: 'sans-serif',
                    fillColor: '#FFF',
                    ...prev,
                    mode: m,
                  },
                };
              })
            }
          />
        ))}
      </View>

      <DemoFieldLabel>Min / max font (static mode)</DemoFieldLabel>
      <DemoTextInput
        keyboardType="number-pad"
        placeholder="minFontSize"
        value={
          textOnRect.minFontSize === undefined
            ? ''
            : String(textOnRect.minFontSize)
        }
        onChangeText={t => {
          if (t.trim() === '') {
            setMapOptions(p => {
              const prev =
                typeof p.textOnRect === 'object' && p.textOnRect !== null
                  ? p.textOnRect
                  : {};
              const rest = { ...prev };
              delete rest.minFontSize;
              return {
                ...p,
                textOnRect: {
                  fontFamily: 'sans-serif',
                  fillColor: '#FFF',
                  ...rest,
                },
              };
            });
            return;
          }
          const n = parseInt(t, 10);
          if (!Number.isFinite(n)) return;
          setMapOptions(p => {
            const prev =
              typeof p.textOnRect === 'object' && p.textOnRect !== null
                ? p.textOnRect
                : {};
            return {
              ...p,
              textOnRect: {
                fontFamily: 'sans-serif',
                fillColor: '#FFF',
                ...prev,
                minFontSize: n,
              },
            };
          });
        }}
      />
      <DemoTextInput
        keyboardType="number-pad"
        placeholder="maxFontSize"
        value={
          textOnRect.maxFontSize === undefined
            ? ''
            : String(textOnRect.maxFontSize)
        }
        onChangeText={t => {
          if (t.trim() === '') {
            setMapOptions(p => {
              const prev =
                typeof p.textOnRect === 'object' && p.textOnRect !== null
                  ? p.textOnRect
                  : {};
              const rest = { ...prev };
              delete rest.maxFontSize;
              return {
                ...p,
                textOnRect: {
                  fontFamily: 'sans-serif',
                  fillColor: '#FFF',
                  ...rest,
                },
              };
            });
            return;
          }
          const n = parseInt(t, 10);
          if (!Number.isFinite(n)) return;
          setMapOptions(p => {
            const prev =
              typeof p.textOnRect === 'object' && p.textOnRect !== null
                ? p.textOnRect
                : {};
            return {
              ...p,
              textOnRect: {
                fontFamily: 'sans-serif',
                fillColor: '#FFF',
                ...prev,
                maxFontSize: n,
              },
            };
          });
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
        placeholder="default 8"
        value={
          animation.speedFactor === undefined
            ? ''
            : String(animation.speedFactor)
        }
        onChangeText={t => {
          if (t.trim() === '') {
            setMapOptions(p => {
              const anim = { ...(p.animation ?? {}) };
              delete anim.speedFactor;
              return {
                ...p,
                animation:
                  Object.keys(anim).length > 0 ? anim : undefined,
              };
            });
            return;
          }
          const n = parseFloat(t);
          if (!Number.isFinite(n)) return;
          setMapOptions(p => ({
            ...p,
            animation: { ...(p.animation ?? {}), speedFactor: n },
          }));
        }}
      />

      <DemoFieldLabel>Animation frequency factor</DemoFieldLabel>
      <DemoTextInput
        keyboardType="decimal-pad"
        placeholder="default 8"
        value={
          animation.frequencyFactor === undefined
            ? ''
            : String(animation.frequencyFactor)
        }
        onChangeText={t => {
          if (t.trim() === '') {
            setMapOptions(p => {
              const anim = { ...(p.animation ?? {}) };
              delete anim.frequencyFactor;
              return {
                ...p,
                animation:
                  Object.keys(anim).length > 0 ? anim : undefined,
              };
            });
            return;
          }
          const n = parseFloat(t);
          if (!Number.isFinite(n)) return;
          setMapOptions(p => ({
            ...p,
            animation: { ...(p.animation ?? {}), frequencyFactor: n },
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
            /* Embedded map aborts init if stackAnimation is on but stackMode is off. */
            ...(v ? { stackMode: true } : {}),
          }))
        }
      />
      <Text style={styles.hint}>
        Stack animation requires stack mode; turning this on also enables{' '}
        <Text style={styles.hintMono}>stackMode</Text>.
      </Text>

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
