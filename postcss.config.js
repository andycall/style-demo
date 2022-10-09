module.exports = {
  plugins: {
    "postcss-px-to-viewport-8-plugin": {
      unitToConvert: "px",
      viewportWidth: 375,
      unitPrecision: 3,
      propList: ["*"],
      viewportUnit: "vw",
      fontViewportUnit: "vw",
      minPixelValue: 2,
      mediaQuery: true,
      replace: true,
      exclude: [/node_modules/],
    },
  },
};
