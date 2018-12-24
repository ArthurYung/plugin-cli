import typescript from 'rollup-plugin-typescript'
import tslint from 'rollup-plugin-tslint'

export default [
  tslint(),
  typescript()
]