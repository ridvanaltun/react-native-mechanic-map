import { MapResponses } from './mapEnums';
import type {
  EventPayload,
  Location,
  LevelSwitchedData,
  MapScriptErrorData,
  TooltipDetailClickData,
  TooltipEnterBuildingClickData,
  TooltipNavigationClickData,
} from './types';

const VALID_RESPONSE_ACTIONS = new Set<string>(
  Object.values(MapResponses) as string[]
);

function isMapResponseAction(value: unknown): value is MapResponses {
  return typeof value === 'string' && VALID_RESPONSE_ACTIONS.has(value);
}

/**
 * Maps raw `data` from the WebView to the discriminated {@link EventPayload} union.
 * Assertions are centralized here; callers should rely on `event.action` narrowing.
 */
function bridgeDataToEventPayload(
  action: MapResponses,
  data: unknown
): EventPayload {
  switch (action) {
    case MapResponses.MAP_LOADED:
      return { action, data };
    case MapResponses.LOCATION_OPENED:
      return { action, data: data as Location | undefined };
    case MapResponses.LOCATION_CLOSED:
      return { action, data };
    case MapResponses.LEVEL_SWITCHED:
      return { action, data: data as LevelSwitchedData | undefined };
    case MapResponses.LOCATION_HIGHLIGHTED:
      return { action, data };
    case MapResponses.NAVIGATION_CANCELLED:
      return { action, data };
    case MapResponses.TOOLTIP_NAVIGATION_CLICKED:
      return {
        action,
        data: data as TooltipNavigationClickData | undefined,
      };
    case MapResponses.TOOLTIP_DETAIL_CLICKED:
      return { action, data: data as TooltipDetailClickData | undefined };
    case MapResponses.TOOLTIP_ENTER_BUILDING_CLICKED:
      return {
        action,
        data: data as TooltipEnterBuildingClickData | undefined,
      };
    case MapResponses.TOOLTIP_CLOSE_CLICKED:
      return { action, data };
    case MapResponses.ERROR:
      return { action, data: data as MapScriptErrorData | undefined };
    default: {
      const _exhaustive: never = action;
      return _exhaustive;
    }
  }
}

export type ParseMapWebViewMessageFailure =
  | { reason: 'invalid_json' }
  | { reason: 'invalid_shape' }
  | { reason: 'unknown_action'; action: string };

export type ParseMapWebViewMessageResult =
  | { ok: true; payload: EventPayload }
  | { ok: false; failure: ParseMapWebViewMessageFailure };

/**
 * Parses and validates JSON posted from the embedded Mechanic Map WebView.
 * Rejects malformed JSON, non-objects, and unknown `action` values.
 */
export function parseMapWebViewMessage(
  raw: string
): ParseMapWebViewMessageResult {
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return { ok: false, failure: { reason: 'invalid_json' } };
  }

  if (typeof parsed !== 'object' || parsed === null) {
    return { ok: false, failure: { reason: 'invalid_shape' } };
  }

  const record = parsed as Record<string, unknown>;
  const action = record.action;

  if (!isMapResponseAction(action)) {
    return {
      ok: false,
      failure: {
        reason: 'unknown_action',
        action: action === undefined ? '(missing)' : String(action),
      },
    };
  }

  return {
    ok: true,
    payload: bridgeDataToEventPayload(action, record.data),
  };
}
