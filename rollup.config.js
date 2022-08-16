import { nodeResolve } from '@rollup/plugin-node-resolve';
import dts from 'rollup-plugin-dts'
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import typescript from '@rollup/plugin-typescript';
import postCSS from 'rollup-plugin-postcss';
import url from 'rollup-plugin-url'

import pkg from './package.json';

const config = [
  {
    input: 'src/index.tsx',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
      },
      {
        file: pkg.module,
        format: 'esm',
      },
    ],
    external: [...Object.keys(pkg.peerDependencies || {})],
    plugins: [
      alias({
        entries: [
          { find: 'react-native', replacement: 'react-native-web' },
          { find: 'react-native-linear-gradient', replacement: 'react-native-web-linear-gradient' }
        ]
      }),
      nodeResolve(),
      commonjs(),
      url({
        // by default, rollup-plugin-url will not handle font files
        include: ['**/*.ttf'],
        // setting infinite limit will ensure that the files 
        // are always bundled with the code, not copied to /dist
        limit: Infinity,
      }),
      typescript({
        tsconfig: "./tsconfig.json"
      }),
      postCSS({
        plugins: [require('autoprefixer')],
      }),
    ],
  },
  {
    input: 'dist/dts/src/index.d.ts',
    output: [{ file: 'dist/esm/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  }
];

export default config;
