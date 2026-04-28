import { FixtureARoutes, FixtureBRoutes } from '../constants/data';

/** Labels for `assets/fixture-a/routes.json` keys (same order as in file). */
export const FIXTURE_A_ROUTE_CHIPS: {
  key: keyof typeof FixtureARoutes;
  label: string;
}[] = [
  { key: 'ROUTE_01', label: 'Single-floor route' },
  { key: 'ROUTE_02', label: 'Multi-floor route' },
];

export const FIXTURE_B_ROUTE_CHIPS: {
  key: keyof typeof FixtureBRoutes;
  label: string;
}[] = [
  { key: 'ROUTE_01', label: 'Single-floor route' },
  { key: 'ROUTE_02', label: 'Multi-floor route' },
];

export const MAX_MAP_EVENTS = 50;
