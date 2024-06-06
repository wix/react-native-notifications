const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const config = {
  projectRoot: `${__dirname}/example`,
  watchFolders: [
    __dirname,
  ],
  resolver: {
    enableGlobalPackages: true,
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
