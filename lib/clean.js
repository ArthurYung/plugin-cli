/**
 * 
 * **清除.git文件夹
 * 
 * @param {string} name 目录名称
 * @param {function} cb 回调函数 
 * 
 */

const fs = require('fs')
const rimraf = require('rimraf')
const path = require('path')
const chalk = require('chalk')

module.exports = (name, cb) => {
    const workspace = process.cwd();
    const target = path.resolve(workspace, name, '.git')
    if(fs.existsSync(target)){
        rimraf(target, {}, (err)=>{
            if(err)  console.log(chalk.bgRed('err!'))
            else cb()
        })
    }
}
