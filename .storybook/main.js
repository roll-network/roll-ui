const path = require('path');

const customWebpack = (config) => {
	config.resolve.alias = {
		...config.resolve.alias,
		'react-native$': 'react-native-web',
		'@storybook/react-native': '@storybook/react',
		'react-native-linear-gradient': 'react-native-web-linear-gradient',
	};
	const fileLoaderRule = config.module.rules.find(
		(rule) => rule.test && rule.test.test('.svg')
	);
	fileLoaderRule.exclude = /\.svg$/;

	config.module.rules.push({
		test: /\.svg$/,
		enforce: 'pre',
		loader: require.resolve('@svgr/webpack'),
	});
	return config;
};

module.exports = {
	stories: ['../src/**/*.stories.tsx'],
	addons: [
		// TODO - including this preset breaks storybook (build succeds but stuck on spinner in browser) likely due to conficts with custom build.
		// this preset will be required to manually add in an upcoming storybook release, so worth figuring out soon enough
		// "@storybook/preset-create-react-app",
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		{
			/**
			 * Fix Storybook issue with PostCSS@8
			 * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
			 */
			name: '@storybook/addon-postcss',
			options: {
				postcssLoaderOptions: {
					implementation: require('postcss'),
				},
			},
		},
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
	framework: '@storybook/react',
	webpackFinal: customWebpack,
};
