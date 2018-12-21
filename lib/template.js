/**
 * 
 * @name 根据用户选择添加不同的配置
 * 
 * @param {string} name 项目名称
 * @param {object} config 项目配置
 * 
 */


const path = require('path')
const copy = require('./copy')
const concat = require('./concat')
const fs = require('fs')
const ora = require('ora')
const chalk = require('chalk')
const install = require('./install')
module.exports = (name, config) => {
    const __project = path.join(process.cwd(), name)
    const __pkg = path.join(__project, 'package.json')

    const typescript = config.typescript,
        useLint = config.lint,
        useTest = config.test

    const __temp = path.resolve(__dirname, '..', 'template', typescript ? 'ts' : 'es')

    const options = {
        "name": name,
        "version": config.version,
        "author": config.author || "",
        "description": config.description,
        "keywords": config.keywords,
        "license": config.license
    }
    const Ora = new ora(`创建文件... `)

    const _Ora = (m) => {
        Ora.text = `创建文件... ${m}`
    }

    Ora.start()

    _Ora('package.json')

    copy(__pkg, path.join(__temp, 'package.json'))
    concat(__pkg, options)

    fs.mkdirSync(path.join(__project, 'src'))
    useTest && fs.mkdirSync(path.join(__project, 'test'))

    if (typescript) {

        _Ora('index.ts')

        copy(path.join(__project, 'src', 'index.ts'), path.join(__temp, 'index.ts'))

        if (useLint) {

            concat(__pkg, path.join(__temp, 'package-tslint.json'))

            _Ora('tslint.json')
            copy(path.join(__project, 'tslint.json'), path.join(__temp, 'tslint.json'))

            _Ora('tsconfig.json')
            copy(path.join(__project, 'tsconfig.json'), path.join(__temp, 'tsconfig.json'))

            _Ora('build/rollup.dev.js')
            copy(path.join(__project, 'build', 'rollup.dev.js'), path.join(__temp, 'tslint.dev.js'))
        } else {
            _Ora('build/rollup.dev.js')
            copy(path.join(__project, 'build', 'rollup.dev.js'), path.join(__temp, 'dev.js'))
        }

        if (useTest) {
            concat(__pkg, path.join(__temp, 'test', 'package-test.json'))

            _Ora('jest.config.js')
            copy(path.join(__project, 'jest.config.js'), path.join(__temp, 'test', 'jest.config.js'))

            _Ora('test/index.test.ts')
            copy(path.join(__project, 'test', 'index.test.ts'), path.join(__temp, 'test', 'index.test.ts'))
        }
    } else {

        _Ora('index.js')

        copy(path.join(__project, 'src', 'index.js'), path.join(__temp, 'index.js'))

        if (useLint) {

            concat(__pkg, path.join(__temp, 'package-eslint.json'))

            _Ora('.eslintrc')
            copy(path.join(__project, '.eslintrc'), path.join(__temp, '.eslintrc'))


            _Ora('build/rollup.dev.js')
            copy(path.join(__project, 'build', 'rollup.dev.js'), path.join(__temp, 'eslint.dev.js'))
        } else {

            _Ora('build/rollup.dev.js')
            copy(path.join(__project, 'build', 'rollup.dev.js'), path.join(__temp, 'dev.js'))
            copy(path.join(__project, '.babelrc'), path.join(__temp, '.babelrc'))
        }

        if (useTest) {
            concat(__pkg, path.join(__temp, 'test', 'package-test.json'))

            _Ora('test/index.test.js')
            copy(path.join(__project, 'test', 'index.test.js'), path.join(__temp, 'test', 'index.test.js'))
        }
    }
    Ora.succeed(chalk.green('项目已生成!'))
    install(name)
}