import * as React from 'react';
import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import type { MechanicMapHandle, MechanicMapOptions } from 'react-native-mechanic-map';

import type { MapPayloadId } from '../constants/data';
import type { MapEventRow } from './mapEventUtils';
import type { PanelTab } from './types';
import { useDemoUiTheme } from './DemoUiThemeContext';
import type { DemoUiPalette } from './theme';
import { DemoControlsTab } from './DemoControlsTab';
import { DemoEventsTab } from './DemoEventsTab';

type LocationItem = { id: string; type: string };

export function DemoPanel({
  bottomPad,
  maxHeight,
  bottomOffset,
  panelTab,
  onPanelTab,
  mapEvents,
  onClearLog,
  onHide,
  mapRef,
  locations,
  mapPayloadId,
  currOpen,
  setCurrOpen,
  locationOpen,
  setLocationOpen,
  navigationOpen,
  setNavigationOpen,
  colorOpen,
  setColorOpen,
  mapOptions,
  setMapOptions,
  languageCode,
  onLanguageCode,
  lastMapLoadMs,
}: {
  bottomPad: number;
  maxHeight: number;
  bottomOffset: number;
  panelTab: PanelTab;
  onPanelTab: (tab: PanelTab) => void;
  mapEvents: MapEventRow[];
  onClearLog: () => void;
  onHide: () => void;
  mapRef: React.RefObject<MechanicMapHandle | null>;
  locations: LocationItem[];
  mapPayloadId: MapPayloadId;
  currOpen: boolean;
  setCurrOpen: (v: boolean) => void;
  locationOpen: boolean;
  setLocationOpen: (v: boolean) => void;
  navigationOpen: boolean;
  setNavigationOpen: (v: boolean) => void;
  colorOpen: boolean;
  setColorOpen: (v: boolean) => void;
  mapOptions: MechanicMapOptions;
  setMapOptions: React.Dispatch<React.SetStateAction<MechanicMapOptions>>;
  languageCode: string;
  onLanguageCode: (code: string) => void;
  lastMapLoadMs: number | null;
}) {
  const { palette } = useDemoUiTheme();
  const styles = React.useMemo(() => createDemoPanelStyles(palette), [palette]);

  return (
    <View
      style={[
        styles.panel,
        {
          paddingBottom: bottomPad,
          maxHeight,
          bottom: bottomOffset,
        },
      ]}
    >
      <View style={styles.panelHeader}>
        <View style={styles.panelHeaderTitleBlock}>
          <Text style={styles.panelKicker}>react-native-mechanic-map</Text>
          <Text style={styles.panelTitle}>Demo controls</Text>
        </View>
        <View style={styles.panelHeaderActions}>
          {panelTab === 'events' ? (
            <Pressable
              onPress={onClearLog}
              disabled={mapEvents.length === 0}
              android_ripple={{ color: palette.ripple }}
              style={({ pressed }) => [
                styles.clearLogPill,
                mapEvents.length === 0 && styles.clearLogPillDisabled,
                pressed &&
                  mapEvents.length > 0 &&
                  styles.clearLogPillPressed,
              ]}
            >
              <Text
                style={[
                  styles.clearLogPillText,
                  mapEvents.length === 0 && styles.clearLogPillTextDisabled,
                ]}
              >
                Clear log
              </Text>
            </Pressable>
          ) : null}
          <Pressable
            onPress={onHide}
            android_ripple={{ color: palette.ripple }}
            style={({ pressed }) => [
              styles.hidePill,
              pressed && styles.hidePillPressed,
            ]}
          >
            <Text style={styles.hidePillText}>Hide</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.tabBar}>
        <Pressable
          onPress={() => onPanelTab('controls')}
          android_ripple={{ color: palette.ripple }}
          style={({ pressed }) => [
            styles.tab,
            panelTab === 'controls' && styles.tabActive,
            pressed && Platform.OS === 'ios' && styles.tabPressed,
          ]}
        >
          <Text
            style={[
              styles.tabLabel,
              panelTab === 'controls' && styles.tabLabelActive,
            ]}
          >
            Controls
          </Text>
        </Pressable>
        <Pressable
          onPress={() => onPanelTab('events')}
          android_ripple={{ color: palette.ripple }}
          style={({ pressed }) => [
            styles.tab,
            panelTab === 'events' && styles.tabActive,
            pressed && Platform.OS === 'ios' && styles.tabPressed,
          ]}
        >
          <Text
            style={[
              styles.tabLabel,
              panelTab === 'events' && styles.tabLabelActive,
            ]}
          >
            Events
            {mapEvents.length > 0 ? (
              <Text style={styles.tabBadge}> {mapEvents.length}</Text>
            ) : null}
          </Text>
        </Pressable>
      </View>

      <View style={styles.panelBody}>
        {panelTab === 'controls' ? (
          <DemoControlsTab
            mapRef={mapRef}
            locations={locations}
            mapPayloadId={mapPayloadId}
            currOpen={currOpen}
            setCurrOpen={setCurrOpen}
            locationOpen={locationOpen}
            setLocationOpen={setLocationOpen}
            navigationOpen={navigationOpen}
            setNavigationOpen={setNavigationOpen}
            colorOpen={colorOpen}
            setColorOpen={setColorOpen}
            mapOptions={mapOptions}
            setMapOptions={setMapOptions}
            languageCode={languageCode}
            onLanguageCode={onLanguageCode}
          />
        ) : (
          <DemoEventsTab
            mapEvents={mapEvents}
            lastMapLoadMs={lastMapLoadMs}
          />
        )}
      </View>
    </View>
  );
}

function createDemoPanelStyles(p: DemoUiPalette) {
  return StyleSheet.create({
    panel: {
      position: 'absolute',
      left: 12,
      right: 12,
      flexDirection: 'column',
      borderTopLeftRadius: 18,
      borderTopRightRadius: 18,
      backgroundColor: p.panelBg,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: p.border,
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.35,
          shadowRadius: 12,
        },
        android: {
          elevation: 16,
        },
      }),
      zIndex: 50,
    },
    panelHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingTop: 14,
      paddingBottom: 10,
      marginBottom: 12,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: p.border,
    },
    panelHeaderTitleBlock: {
      flex: 1,
      minWidth: 0,
      marginRight: 10,
    },
    panelHeaderActions: {
      flexDirection: 'row',
      alignItems: 'center',
      flexShrink: 0,
      gap: 8,
    },
    clearLogPill: {
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 999,
      backgroundColor: p.accentSoft,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: p.chipEmphasisBorder,
    },
    clearLogPillPressed: {
      opacity: 0.88,
    },
    clearLogPillDisabled: {
      opacity: 0.42,
    },
    clearLogPillText: {
      fontSize: 13,
      fontWeight: '600',
      color: p.accent,
    },
    clearLogPillTextDisabled: {
      color: p.textMuted,
    },
    panelKicker: {
      fontSize: 11,
      fontWeight: '600',
      letterSpacing: 0.4,
      color: p.textMuted,
      textTransform: 'uppercase',
    },
    panelTitle: {
      marginTop: 2,
      fontSize: 18,
      fontWeight: '700',
      color: p.text,
      letterSpacing: -0.3,
    },
    hidePill: {
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 999,
      backgroundColor: p.surface,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: p.border,
    },
    hidePillPressed: {
      backgroundColor: p.surfacePressed,
    },
    hidePillText: {
      fontSize: 13,
      fontWeight: '600',
      color: p.accent,
    },
    tabBar: {
      flexDirection: 'row',
      marginHorizontal: 12,
      marginBottom: 10,
      padding: 4,
      borderRadius: 14,
      backgroundColor: p.surface,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: p.tabBarBorder,
      gap: 4,
    },
    tab: {
      flex: 1,
      paddingVertical: 11,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    },
    tabActive: {
      backgroundColor: p.accentSoft,
    },
    tabPressed: {
      opacity: 0.92,
    },
    tabLabel: {
      fontSize: 14,
      fontWeight: '600',
      color: p.textMuted,
    },
    tabLabelActive: {
      color: p.text,
    },
    tabBadge: {
      fontSize: 13,
      fontWeight: '700',
      color: p.accent,
    },
    panelBody: {
      flexGrow: 1,
      flexShrink: 1,
      minHeight: 0,
    },
  });
}
