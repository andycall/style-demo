module.exports = {
  presets: [
    // "@vue/cli-plugin-babel/preset",
    // {
    //   useBuiltIns: false,
    // },
  ],
  plugins: [
    "@babel/plugin-proposal-optional-chaining",
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        style: (name) => `${name}/style/less`,
      },
      "vant",
    ],
  ],
};
