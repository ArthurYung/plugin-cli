import postcss from 'rollup-plugin-postcss'
import name from './name'
import babel from 'rollup-plugin-babel'
export default [
    babel({
        exclude: 'node_modules',
    }),
    postcss({
        extract : `dist/css/${name}.css`
    })
]