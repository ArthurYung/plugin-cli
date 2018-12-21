import postcss from 'rollup-plugin-postcss'
import name from './name'
import typescript from 'rollup-plugin-typescript';
export default [
    typescript(),
    postcss({
        extract : `dist/css/${name}.css`
    })
]