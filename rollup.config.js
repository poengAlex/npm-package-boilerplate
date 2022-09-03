import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import styles from 'rollup-plugin-styles';
import { terser } from 'rollup-plugin-terser';
import { browser, main, module, version } from './package.json';

export default [
  {
    input: 'src/index.ts',
    output: {
      name: 'FRONTEND_PACKAGE_NAME',
      file: browser,
      format: 'umd',
      sourcemap: true,
    },
    plugins: [
      replace({
        preventAssignment: true,
        values: {
          "__version__": version
        },
      }),
      resolve(),
      commonjs(),
      styles(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser(),
    ],
  },
  {
    input: 'src/index.ts',
    plugins: [
      replace({
        preventAssignment: true,
        values: {
          "__version__": version
        },
      }),
      resolve(),
      commonjs(),
      styles(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser(),
    ],
    output: [
      { file: main, format: 'cjs', sourcemap: true },
      { file: module, format: 'es', sourcemap: true },
    ],
  },
];
