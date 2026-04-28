import * as React from 'react';

import { MAX_MAP_EVENTS } from '../constants';
import {
  formatEventTime,
  serializeEventDetail,
  type MapEventRow,
} from '../mapEventUtils';

export function useMapEventLog() {
  const [mapEvents, setMapEvents] = React.useState<MapEventRow[]>([]);

  const pushMapEvent = React.useCallback((name: string, detail?: unknown) => {
    const detailStr = serializeEventDetail(detail);
    setMapEvents(prev =>
      [
        {
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
          time: formatEventTime(),
          name,
          detail: detailStr,
        },
        ...prev,
      ].slice(0, MAX_MAP_EVENTS),
    );
  }, []);

  return { mapEvents, setMapEvents, pushMapEvent };
}
