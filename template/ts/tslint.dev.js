import postcss from 'rollup-plugin-postcss'
import name from './name'
import typescript from 'rollup-plugin-typescript'
import tslint from 'rollup-plugin-tslint'

export default [
    tslint(),
    typescript(),
    postcss({
        extract : `dist/css/${name}.css`
    })
]