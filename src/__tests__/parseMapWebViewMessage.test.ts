import { MapResponses } from '../mapEnums';
import { parseMapWebViewMessage } from '../parseMapWebViewMessage';

describe('parseMapWebViewMessage', () => {
  it('accepts valid mapLoaded message', () => {
    const raw = JSON.stringify({
      action: MapResponses.MAP_LOADED,
      data: { foo: 1 },
    });
    const result = parseMapWebViewMessage(raw);
    expect(result).toEqual({
      ok: true,
      payload: { action: MapResponses.MAP_LOADED, data: { foo: 1 } },
    });
  });

  it('rejects invalid JSON', () => {
    const result = parseMapWebViewMessage('not json');
    expect(result).toEqual({
      ok: false,
      failure: { reason: 'invalid_json' },
    });
  });

  it('rejects non-object root', () => {
    expect(parseMapWebViewMessage('42')).toEqual({
      ok: false,
      failure: { reason: 'invalid_shape' },
    });
    expect(parseMapWebViewMessage('null')).toEqual({
      ok: false,
      failure: { reason: 'invalid_shape' },
    });
  });

  it('rejects unknown action', () => {
    const result = parseMapWebViewMessage(
      JSON.stringify({ action: 'not-a-real-event' })
    );
    expect(result).toEqual({
      ok: false,
      failure: { reason: 'unknown_action', action: 'not-a-real-event' },
    });
  });

  it('rejects missing action', () => {
    const result = parseMapWebViewMessage(JSON.stringify({ data: {} }));
    expect(result).toEqual({
      ok: false,
      failure: { reason: 'unknown_action', action: '(missing)' },
    });
  });
});
