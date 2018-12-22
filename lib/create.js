/**
 * 
 * @name 下载GIT模板
 * 
 * @param {string} moduleName 项目名称
 * @param {object} config 用户配置
 * @param {boolen} tc 是否为tnpm
 * 
 */


const download = require('./download')
const ora = require("ora")

const createTemplate = require('./template')
const cleanGit = require('./clean')

module.exports = (moduleName, config, tc) => {

    const loading = new ora({spinner: 'clock'})
    const startTime = new Date().getTime()
    loading.start('clone templates from Git...')
    download('https://github.com/ChuckOu/rollup-all.git', moduleName, err => {
        if(err) console.log(err),loading.fail('template fail')
        else{
            const useTime = (new Date().getTime() - startTime) / 1000

            loading.succeed(`download template in ${useTime}`)
            
            cleanGit(moduleName, () => createTemplate(moduleName, config, tc))
        }
    })
}