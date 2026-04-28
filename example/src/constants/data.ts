import type { MechanicMapPayload, Route } from 'react-native-mechanic-map';
import payloadFixtureA from '../../assets/fixture-a/payload.json';
import fixtureARoutesRaw from '../../assets/fixture-a/routes.json';
import payloadFixtureB from '../../assets/fixture-b/payload.json';
import fixtureBRoutesRaw from '../../assets/fixture-b/routes.json';

export type MapPayloadId = 'fixtureA' | 'fixtureB';

export const MAP_PAYLOADS: Record<
  MapPayloadId,
  { label: string; payload: MechanicMapPayload[] }
> = {
  fixtureA: {
    label: 'Fixture A',
    payload: payloadFixtureA as MechanicMapPayload[],
  },
  fixtureB: {
    label: 'Fixture B',
    payload: payloadFixtureB as MechanicMapPayload[],
  },
};

type FixtureARoutesMap = {
  ROUTE_01: Route;
  ROUTE_02: Route;
};

type FixtureBRoutesMap = {
  ROUTE_01: Route;
  ROUTE_02: Route;
};

export const FixtureARoutes = fixtureARoutesRaw as FixtureARoutesMap;
export const FixtureBRoutes = fixtureBRoutesRaw as FixtureBRoutesMap;
