import babel from 'rollup-plugin-babel'
import {eslint} from 'rollup-plugin-eslint'

export default [
  babel({
    exclude: 'node_modules',
  }),
  eslint({
    include: ['src/**/*.js', 'src/**/*.ts'],
  })
]