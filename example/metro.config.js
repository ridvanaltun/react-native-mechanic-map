const path = require('path');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const libraryRoot = path.resolve(__dirname, '..');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * `watchFolders` includes the library repo root so Metro picks up changes when
 * `react-native-mechanic-map` is linked via `file:..`.
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const exampleNodeModules = path.resolve(__dirname, 'node_modules');
const libraryNodeModules = path.resolve(libraryRoot, 'node_modules');

const config = {
  watchFolders: [libraryRoot],
  resolver: {
    // Files under the linked library (`../src`) must resolve `react`, `react/jsx-runtime`,
    // etc. from the example app. The repo root still has React 16 (no jsx-runtime), which
    // Metro would otherwise pick via hierarchical lookup first.
    nodeModulesPaths: [exampleNodeModules, libraryNodeModules],
    disableHierarchicalLookup: true,
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
