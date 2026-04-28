import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import type { MechanicMapHandle, MechanicMapOptions } from 'react-native-mechanic-map';

import type { MapPayloadId } from '../constants/data';
import { ColorChips } from './chips/ColorChips';
import { CurrentLocationChips } from './chips/CurrentLocationChips';
import { LocationChips } from './chips/LocationChips';
import { NavigationChips } from './chips/NavigationChips';
import { ExpandableSection } from './components/ExpandableSection';
import { DemoApiExtrasSection } from './sections/DemoApiExtrasSection';
import { DemoCameraSection } from './sections/DemoCameraSection';
import { DemoMapOptionsSection } from './sections/DemoMapOptionsSection';
import { DemoScenariosSection } from './sections/DemoScenariosSection';

type LocationItem = { id: string; type: string };

export function DemoControlsTab({
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
}: {
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
}) {
  const [mapOptsOpen, setMapOptsOpen] = React.useState(false);
  const [cameraOpen, setCameraOpen] = React.useState(false);
  const [apiExtrasOpen, setApiExtrasOpen] = React.useState(false);
  const [scenariosOpen, setScenariosOpen] = React.useState(false);

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <ExpandableSection
        title="Map options & language"
        expanded={mapOptsOpen}
        onToggle={() => setMapOptsOpen(!mapOptsOpen)}
      >
        <DemoMapOptionsSection
          languageCode={languageCode}
          onLanguageCode={onLanguageCode}
          mapOptions={mapOptions}
          setMapOptions={setMapOptions}
        />
      </ExpandableSection>

      <ExpandableSection
        title="Camera (moveTo / zoomTo)"
        expanded={cameraOpen}
        onToggle={() => setCameraOpen(!cameraOpen)}
      >
        <DemoCameraSection mapRef={mapRef} />
      </ExpandableSection>

      <ExpandableSection
        title="Floor, highlight, showLocation"
        expanded={apiExtrasOpen}
        onToggle={() => setApiExtrasOpen(!apiExtrasOpen)}
      >
        <DemoApiExtrasSection
          mapRef={mapRef}
          mapPayloadId={mapPayloadId}
          locations={locations}
        />
      </ExpandableSection>

      <ExpandableSection
        title="Scenarios"
        expanded={scenariosOpen}
        onToggle={() => setScenariosOpen(!scenariosOpen)}
      >
        <DemoScenariosSection
          mapRef={mapRef}
          mapPayloadId={mapPayloadId}
          locations={locations}
        />
      </ExpandableSection>

      <ExpandableSection
        title="Current location"
        expanded={currOpen}
        onToggle={() => setCurrOpen(!currOpen)}
      >
        <CurrentLocationChips mapRef={mapRef} />
      </ExpandableSection>

      <ExpandableSection
        title="Locations"
        expanded={locationOpen}
        onToggle={() => setLocationOpen(!locationOpen)}
      >
        <LocationChips mapRef={mapRef} locations={locations} />
      </ExpandableSection>

      <ExpandableSection
        title="Navigation"
        expanded={navigationOpen}
        onToggle={() => setNavigationOpen(!navigationOpen)}
      >
        <NavigationChips mapRef={mapRef} mapPayloadId={mapPayloadId} />
      </ExpandableSection>

      <ExpandableSection
        title="Colors"
        expanded={colorOpen}
        onToggle={() => setColorOpen(!colorOpen)}
      >
        <ColorChips mapRef={mapRef} locations={locations} />
      </ExpandableSection>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    flexShrink: 1,
    minHeight: 0,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 4,
    paddingBottom: 20,
  },
});
