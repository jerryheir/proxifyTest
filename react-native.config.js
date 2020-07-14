module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./assets/Fonts'],
  getTransformModulePath() {
    return require.resolve("react-native-typescript-transformer");
  },
  getSourceExts() {
    return ["ts", "tsx"];
  }
};