# react-native-mechanic-map <!-- omit in toc -->

[![npm version](https://img.shields.io/npm/v/react-native-mechanic-map.svg)](https://npmjs.com/package/react-native-mechanic-map)
[![CircleCI](https://circleci.com/gh/ridvanaltun/react-native-mechanic-map/tree/master.svg?style=shield)](https://circleci.com/gh/ridvanaltun/react-native-mechanic-map/tree/master)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![license](https://img.shields.io/npm/l/react-native-mechanic-map.svg)](https://github.com/ridvanaltun/react-native-mechanic-map/blob/master/LICENSE)

> React Native WebView wrapper for Mechanic Map: interactive floors, navigation, highlights, and imperative APIs from JavaScript.

## Showcase

<p align="center">
  <img src="docs/example-1.png" alt="Showcase example 1" width="32%" />
  <img src="docs/example-2.png" alt="Showcase example 2" width="32%" />
  <img src="docs/example-3.png" alt="Showcase example 3" width="32%" />
</p>

<p align="center">
  <em>Screenshots from the <a href="#example-app">example app</a> — open the action menu to try navigation, floors, and highlights.</em>
</p>

## Table of contents <!-- omit in toc -->

- [Requirements](#requirements)
- [Installation](#installation)
- [Native setup](#native-setup)
  - [Android](#android)
  - [iOS](#ios)
- [Usage](#usage)
  - [Quick start](#quick-start)
  - [Props](#props)
  - [Events](#events)
  - [Imperative API](#imperative-api)
- [Types](#types)
- [Example app](#example-app)
- [Contributing](#contributing)
- [License](#license)

## Requirements

- [React Native](https://reactnative.dev/)
- [react-native-webview](https://github.com/react-native-webview/react-native-webview) **≥ 9** (peer dependency; follow its [install guide](https://github.com/react-native-webview/react-native-webview/blob/master/docs/Guide.md) for your RN version)

## Installation

```sh
npm install react-native-mechanic-map react-native-webview
```

## Native setup

### Android

In **`android/app/build.gradle`** (not the root `android/build.gradle`), add:

```groovy
apply from: "../../node_modules/react-native-mechanic-map/react.gradle"
```

Rebuild the app. This wires the bundled HTML asset the WebView loads.

### iOS

No extra steps beyond `react-native-webview` setup.

## Usage

### Quick start

`payload` is an array of [`MechanicMapPayload`](#types) (floors: size, SVG map, locations). The map auto-initializes when the WebView finishes loading unless you set `disableAutoInit` and call `ref.current?.init(...)` yourself.

```tsx
import * as React from 'react';
import MechanicMap, {
  type MechanicMapHandle,
  type MechanicMapPayload,
} from 'react-native-mechanic-map';

const levels: MechanicMapPayload[] = [
  /* id, no, mapWidth, mapHeight, title, map (SVG), locations */
];

const App = () => {
  const mapRef = React.useRef<MechanicMapHandle>(null);

  return (
    <MechanicMap
      ref={mapRef}
      languageCode="en"
      payload={levels}
      options={{
        rotate: 90,
        initialScaleFactor: 1.25,
      }}
      onMapLoaded={() => {
        mapRef.current?.setFloor(0);
      }}
      onLevelSwitched={(level) => {}}
      onLocationOpened={(location) => {}}
      onLocationClosed={() => {}}
      onNavigationCancelled={() => {}}
      onLocationHighlighted={() => {}}
      onMapError={(data) => {}}
    />
  );
};
```

All [`WebView` props](https://github.com/react-native-webview/react-native-webview/blob/master/docs/Reference.md) are supported and forwarded. `onMapError` also receives bridge/WebView failures (bad messages, load/HTTP errors, Android render-process loss) in addition to map script errors.

### Props

| Prop | Description |
| --- | --- |
| `payload` | `MechanicMapPayload[]` — levels to show |
| `languageCode` | Map language (default `en`) |
| `options` | `MechanicMapOptions` — rotation, zoom, tooltips, colors, etc. |
| `disableAutoInit` | If `true`, skip auto `INIT`; call `ref.current.init({ payload, options, languageCode })` |
| `onEvent` | Optional catch-all: discriminated union of all map → RN events |
| `onMapLoaded`, `onLevelSwitched`, … | See [Events](#events) |
| `onMapError` | Script errors and WebView/bridge failures (`MapScriptErrorData`) |

Tooltip props (optional): `onTooltipNavigationClick`, `onTooltipDetailClick`, `onTooltipEnterBuildingClick`, `onTooltipCloseClick`.

### Events

| Callback | When |
| --- | --- |
| `onMapLoaded` | Map finished loading |
| `onLevelSwitched` | Floor changed (`LevelSwitchedData`) |
| `onLocationOpened` / `onLocationClosed` | Location panel opened/closed |
| `onLocationHighlighted` | Highlight applied |
| `onNavigationCancelled` | User cancelled navigation |
| `onMapError` | Map script or WebView/bridge error |

Use `onEvent` if you prefer a single handler with a typed `EventPayload` union.

### Imperative API

Use `React.useRef<MechanicMapHandle>(null)` and call `mapRef.current` after `onMapLoaded` (or whenever the ref is set). Signatures below match [`src/types.ts`](src/types.ts).

**Floors and lifecycle**

```ts
mapRef.current?.setFloor(1, { resetZoom: true, hideLocation: true });
mapRef.current?.addLevel(newLevel); // MechanicMapPayload — same shape as `payload[]` items
mapRef.current?.resetLevel();
mapRef.current?.reload();
mapRef.current?.init({ payload: levels, languageCode: 'en', options: {} });
```

**Navigation**

```ts
import type { Route } from 'react-native-mechanic-map';

const route = {} as Route; // from your pathfinding / backend

mapRef.current?.showNavigation(route, {
  autoMode: true,
  zoomEnabled: true,
  showPins: true,
});
mapRef.current?.closeNavigation(true);
```

**Locations**

```ts
import { LocationTypes } from 'react-native-mechanic-map';

mapRef.current?.showLocation({
  id: 'store-1',
  type: LocationTypes.STORE,
  duration: true,
  closeNavigation: true,
  moveAndZoom: true,
});
mapRef.current?.hideLocation();
mapRef.current?.highlightLocations(['id-a', 'id-b'], {
  type: LocationTypes.STORE,
  zoomEnabled: true,
  duration: 2000,
});
```

**User pin (“current location”)**

```ts
mapRef.current?.setCurrentLocation(120, 340, { floorNo: 0 });
mapRef.current?.showCurrentLocation();
mapRef.current?.moveCurrentLocation(
  [
    { x: 100, y: 200 },
    { x: 150, y: 220 },
  ],
  { floorNo: 0 }
);
mapRef.current?.removeCurrentLocation();
```

**Viewport**

```ts
mapRef.current?.zoomIn();
mapRef.current?.zoomOut();
mapRef.current?.zoomTo(200, 300, { scale: 2, duration: 400, easing: 'easeOut' });
mapRef.current?.moveTo(200, 300, { scale: 1.5, duration: 300 });
```

**Appearance**

```ts
mapRef.current?.changeColors({
  activeStores: '#22c55e',
  inactiveStores: '#94a3b8',
  background: '#0f172a',
});
```

**Low-level**

```ts
import { MapActions, type PostMessagePayload } from 'react-native-mechanic-map';

const msg: PostMessagePayload = { action: MapActions.ZOOM_IN };
mapRef.current?.postMessage(msg);
```

Prefer the typed methods above; `postMessage` is for advanced or future map actions.

## Types

Exported from the package (see [`src/types.ts`](src/types.ts) / `lib/typescript`):

| Name | Role |
| --- | --- |
| `MechanicMapPayload` | One floor: `id`, `no`, `mapWidth`, `mapHeight`, `title`, `map` (SVG), `locations` |
| `MechanicMapOptions` | UI/behavior: `rotate`, `initialScaleFactor`, tooltips, `colors`, etc. |
| `MechanicMapHandle` | Ref methods |
| `Route` | Navigation path for `showNavigation` |
| `Location`, `LocationTypes`, `Color`, `ColorParams` | Locations and theming |
| `EventPayload`, `LevelSwitchedData`, … | Event typing with `onEvent` |

## Example app

Screenshots in [Showcase](#showcase) are from the `example/` app.

**Local library (`file:..`)**

The example pins `"react-native-mechanic-map": "file:.."` in `example/package.json`. After editing library `src/`, run `yarn prepare` at the package root so `lib/` stays current for consumers. TS paths in `example/tsconfig.json` point at `../src/index.tsx` for local types; if editors or Metro act stale, reinstall in `example/`:

```sh
cd example
npm install react-native-mechanic-map   # or: yarn add react-native-mechanic-map
```

**Run**

```sh
git clone https://github.com/ridvanaltun/react-native-mechanic-map.git
cd react-native-mechanic-map/example
npm install
npm run android
# iOS:
cd ios && pod install && cd ..
npm run ios
```

**Published npm version**

To run the example against the registry instead of the parent folder, set a semver range in `example/package.json` (e.g. `"react-native-mechanic-map": "^0.6.0"`) and `npm install` in `example/`.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT
