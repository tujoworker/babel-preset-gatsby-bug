module.exports = function customPreset(api, options) {
  return {
    presets: [
      [
        "babel-preset-gatsby",
        {
          // stage: "build-javascript", // This fixes the code splitting issue
        },
      ],
    ],
  }
}
