import postcss from 'rollup-plugin-postcss'
import babel from 'rollup-plugin-babel'
import name from './name'
import {eslint} from 'rollup-plugin-eslint'

export default [
  babel({
    exclude: 'node_modules',
  }),
  postcss({
    extract: `dist/css/${name}.css`
  }),
  eslint({
    include: ['src/**/*.js', 'src/**/*.ts'],
  })
]