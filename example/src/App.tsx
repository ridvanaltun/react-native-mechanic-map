import * as React from 'react';

import { useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { MechanicMapHandle, MechanicMapOptions } from 'react-native-mechanic-map';

import { MAP_PAYLOADS, type MapPayloadId } from './constants/data';
import { createDefaultDemoMapOptions } from './demo/defaultDemoMapOptions';
import { DemoMechanicMap } from './demo/DemoMechanicMap';
import { DemoUiThemeProvider } from './demo/DemoUiThemeContext';
import { DemoPanel } from './demo/DemoPanel';
import { FloorStrip } from './demo/components/FloorStrip';
import { MapFooter } from './demo/components/MapFooter';
import { ViewMapToolsStack } from './demo/components/ViewMapToolsStack';
import { useMapEventLog } from './demo/hooks/useMapEventLog';
import type { PanelTab } from './demo/types';

function AppContent() {
  const mechanicMapRef = React.useRef<MechanicMapHandle>(null);
  const insets = useSafeAreaInsets();
  const { height: windowHeight } = useWindowDimensions();

  const [mapPayloadId, setMapPayloadId] =
    React.useState<MapPayloadId>('fixtureA');
  const [panelVisible, setPanelVisible] = React.useState(true);
  const [panelTab, setPanelTab] = React.useState<PanelTab>('controls');
  const [currOpen, setCurrOpen] = React.useState(false);
  const [navigationOpen, setNavigationOpen] = React.useState(false);
  const [locationOpen, setLocationOpen] = React.useState(false);
  const [colorOpen, setColorOpen] = React.useState(false);
  const [activeFloorNo, setActiveFloorNo] = React.useState<number | null>(null);
  const [footerHeight, setFooterHeight] = React.useState(96);
  const [mapOptions, setMapOptions] = React.useState<MechanicMapOptions>(() =>
    createDefaultDemoMapOptions(),
  );
  const [languageCode, setLanguageCode] = React.useState('en');
  const [lastMapLoadMs, setLastMapLoadMs] = React.useState<number | null>(null);
  const mapLoadStartedAt = React.useRef(Date.now());

  const { mapEvents, setMapEvents, pushMapEvent } = useMapEventLog();

  const payload = MAP_PAYLOADS[mapPayloadId].payload;

  React.useLayoutEffect(() => {
    mapLoadStartedAt.current = Date.now();
  }, [mapPayloadId]);

  const handleMapLoaded = React.useCallback(() => {
    setLastMapLoadMs(Date.now() - mapLoadStartedAt.current);
    pushMapEvent('onMapLoaded');
  }, [pushMapEvent]);

  const locations = React.useMemo(
    () =>
      payload.map(floor => floor.locations).reduce((a, b) => a.concat(b), []),
    [payload],
  );

  const floorNumbers = React.useMemo(() => {
    const nos = payload.map(level => level.no);
    return [...new Set(nos)].sort((a, b) => a - b);
  }, [payload]);

  React.useEffect(() => {
    if (floorNumbers.length === 0) {
      setActiveFloorNo(null);
      return;
    }
    setActiveFloorNo(floorNumbers.includes(0) ? 0 : floorNumbers[0]);
  }, [floorNumbers, mapPayloadId]);

  const bottomPad = Math.max(insets.bottom, 12);
  const panelMaxHeight = Math.round(windowHeight * 0.58);
  const floorStripApproxHeight = floorNumbers.length > 0 ? 58 : 0;
  const viewToolsTop =
    insets.top +
    8 +
    floorStripApproxHeight +
    (floorNumbers.length > 0 ? 10 : 12);

  return (
    <>
      <DemoMechanicMap
        mapPayloadId={mapPayloadId}
        payload={payload}
        mapRef={mechanicMapRef}
        mapOptions={mapOptions}
        languageCode={languageCode}
        onMapLoaded={handleMapLoaded}
        onLevelSwitched={newLevel => setActiveFloorNo(newLevel.no)}
        pushMapEvent={pushMapEvent}
      />

      <MapFooter
        bottomPad={bottomPad}
        mapPayloadId={mapPayloadId}
        onMapPayloadId={setMapPayloadId}
        panelVisible={panelVisible}
        onShowPanel={() => setPanelVisible(true)}
        onFooterLayout={setFooterHeight}
      />

      <FloorStrip
        mapRef={mechanicMapRef}
        insetsTop={insets.top}
        floorNumbers={floorNumbers}
        activeFloorNo={activeFloorNo}
        onSelectFloor={setActiveFloorNo}
      />

      <ViewMapToolsStack mapRef={mechanicMapRef} top={viewToolsTop} />

      {panelVisible ? (
        <DemoPanel
          bottomPad={bottomPad}
          maxHeight={panelMaxHeight}
          bottomOffset={footerHeight}
          panelTab={panelTab}
          onPanelTab={setPanelTab}
          mapEvents={mapEvents}
          onClearLog={() => setMapEvents([])}
          onHide={() => setPanelVisible(false)}
          mapRef={mechanicMapRef}
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
          onLanguageCode={setLanguageCode}
          lastMapLoadMs={lastMapLoadMs}
        />
      ) : null}
    </>
  );
}

export default function App() {
  return (
    <DemoUiThemeProvider>
      <AppContent />
    </DemoUiThemeProvider>
  );
}
