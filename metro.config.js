module.exports = {
  projectRoot: `${__dirname}/example`,
  watchFolders: [
    __dirname,
  ],
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    })
  }
};
