const customWebpack = (defaultConfig) => {
  defaultConfig.resolve.alias = {
    ...defaultConfig.resolve.alias,
    "react-native$": "react-native-web",
    "@storybook/react-native": "@storybook/react",
    "react-native-linear-gradient": "react-native-web-linear-gradient",
  };

  // uncomment to log the result webpack config. useful for debugging.
  // console.dir(defaultConfig, { depth: null });
  return defaultConfig;
};

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    // TODO - including this preset breaks storybook (build succeds but stuck on spinner in browser) likely due to conficts with custom build.
    // this preset will be required to manually add in an upcoming storybook release, so worth figuring out soon enough
    // "@storybook/preset-create-react-app",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // this addon would be great to use if it works, but it keeps hanging during the build.
    // webpack has been overidden above, but maybe this is a better option if we can get it to work.
    // {
    //   name: "@storybook/addon-react-native-web",
    //   options: {
    //     modulesToAlias: {
    //       "react-native-linear-gradient": "react-native-web-linear-gradient",
    //     },
    //   },
    // },
  ],
  framework: "@storybook/react",
  webpackFinal: customWebpack,
};
