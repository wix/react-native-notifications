module.exports = function (api) {
  api && api.cache(false);
  return {
    presets: [
      'module:metro-react-native-babel-preset',
      '@babel/preset-env'
    ],
    plugins: [
      '@babel/plugin-proposal-export-namespace-from',
      '@babel/plugin-proposal-export-default-from'
    ]
  };
};
