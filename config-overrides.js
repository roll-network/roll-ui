// config-overrides.js
const {
  addWebpackAlias,
  babelInclude,
  fixBabelImports,
  override,
} = require("customize-cra");

const path = require("path");

module.exports = override(
  fixBabelImports("module-resolver", {
    alias: {
      "^react-native$": "react-native-web",
    },
  }),
  addWebpackAlias({
    "react-native": "react-native-web",
    // "react-native-svg": "svgs",
  }),
  babelInclude([
    path.resolve("src"),
    // path.resolve("node_modules/react-native-web-linear-gradient"),
  ])
);
