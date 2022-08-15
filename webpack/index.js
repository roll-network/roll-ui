const {
  addWebpackAlias,
  babelInclude,
  fixBabelImports,
  override,
} = require("customize-cra");

const path = require("path");

const getWebpackConfig = override(
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

// CRA handles SVG loading via file-loader that is not compatible with Storybook
const replaceSvgLoader = (config) => {
  const rules = config.module.rules.map((rule) => {
    const isSvgRule =
      rule.test &&
      typeof rule.test.test === "function" &&
      rule.test.test(".svg");
    if (isSvgRule) {
      return { ...rule, exclude: /\.svg$/ };
    }

    return rule;
  });

  rules.push({
    test: /\.svg$/,
    enforce: "pre",
    loader: require.resolve("@svgr/webpack"),
  });

  return { ...config, module: { ...config.module, rules } };
};

const getStorybookWebpackConfig = override(
  replaceSvgLoader,
  addWebpackAlias({
    "react-native": "react-native-web",
    "react-native-linear-gradient": "react-native-web-linear-gradient",
  })
);

module.exports = {
  getWebpackConfig,
  getStorybookWebpackConfig,
};
