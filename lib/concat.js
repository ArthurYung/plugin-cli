/**
 * 
 * @name 合并package文件
 * @version 1.0.0
 * 
 * @param {string} bin 生产项目的package.json文件目录
 * @param {string | object} con 需要合并的package.json配置或文件目录
 */

const fs = require('fs')
const path = require('path')

module.exports = (bin, con) => {

    const binPath = path.resolve(bin)
    let _bin = JSON.parse(fs.readFileSync(binPath,'utf-8'))
    let obj;
    
    if(typeof con === 'string'){
        const conPath = path.resolve(con)
        obj = JSON.parse(fs.readFileSync(conPath, 'utf-8')) 
    }else if(Object.keys(con).length > 0){
        obj = con
    }else {
        throw new Error('concat is err!')
    }
    const keys = Object.keys(obj)

    keys.map( key => {

        if(!_bin[key]) _bin[key] = obj[key]
        else {
            if(typeof obj[key] === 'string') _bin[key] = obj[key]
            else{
                const eachKeys = Object.keys(obj[key])
                eachKeys.map( e => {
                    _bin[key][e] = obj[key][e]
                } )
            }
        }
    })
    const newPackage = JSON.stringify(_bin, null, 4) 
    fs.writeFileSync(binPath, newPackage)
}
