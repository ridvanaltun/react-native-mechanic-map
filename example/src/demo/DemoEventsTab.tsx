import * as React from 'react';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';

import type { MapEventRow } from './mapEventUtils';
import { useDemoUiTheme } from './DemoUiThemeContext';
import type { DemoUiPalette } from './theme';

export function DemoEventsTab({
  mapEvents,
  lastMapLoadMs,
}: {
  mapEvents: MapEventRow[];
  lastMapLoadMs: number | null;
}) {
  const { palette } = useDemoUiTheme();
  const styles = React.useMemo(
    () => createDemoEventsStyles(palette),
    [palette],
  );

  return (
    <View style={styles.eventsTab}>
      <ScrollView
        style={styles.eventsTabScroll}
        contentContainerStyle={styles.eventsTabScrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator
      >
        {lastMapLoadMs != null ? (
          <Text style={styles.loadMeta}>
            Last map ready: {lastMapLoadMs} ms (since fixture / load start)
          </Text>
        ) : null}
        {mapEvents.length === 0 ? (
          <Text style={styles.eventLogEmpty}>No events yet</Text>
        ) : (
          mapEvents.map(row => (
            <View key={row.id} style={styles.eventRow}>
              <Text style={styles.eventRowMeta}>
                <Text style={styles.eventRowTime}>{row.time}</Text>
                <Text style={styles.eventRowName}> {row.name}</Text>
              </Text>
              {row.detail ? (
                <Text style={styles.eventRowDetail} selectable>
                  {row.detail}
                </Text>
              ) : null}
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

function createDemoEventsStyles(p: DemoUiPalette) {
  return StyleSheet.create({
    eventsTab: {
      flex: 1,
      flexShrink: 1,
      minHeight: 0,
      paddingHorizontal: 16,
    },
    eventsTabScroll: {
      flexGrow: 1,
      flexShrink: 1,
      minHeight: 0,
    },
    eventsTabScrollContent: {
      paddingTop: 4,
      paddingBottom: 12,
    },
    loadMeta: {
      fontSize: 12,
      color: p.textMuted,
      marginBottom: 12,
    },
    eventLogEmpty: {
      fontSize: 13,
      color: p.textMuted,
      fontStyle: 'italic',
      paddingVertical: 8,
    },
    eventRow: {
      paddingVertical: 8,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: p.eventRowBorder,
    },
    eventRowMeta: {
      fontSize: 13,
    },
    eventRowTime: {
      fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
      color: p.textMuted,
      fontSize: 12,
    },
    eventRowName: {
      fontWeight: '700',
      color: p.accent,
      fontSize: 13,
    },
    eventRowDetail: {
      marginTop: 4,
      fontSize: 11,
      fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
      color: p.textMuted,
      lineHeight: 15,
    },
  });
}
