/**
 * 
 * @name 项目设置
 * 
 * @param {string} moduleName 项目名称
 * @param {boolen} tc 是否为tnpm
 * 
 */

const inquirer = require('inquirer')
const createProject = require('./create')

module.exports = async (moduleName, tc) => {
    const config = await inquirer.prompt([
        {
            type: 'input',
            name: 'version',
            message: 'Version',
            default: '1.0.0'
          },
        {
            type: 'input',
            name: 'description',
            message: 'Description',
            default: 'A project build by plugin-cli.'
          },
          {
            type: 'input',
            name: 'author',
            message: 'Author',
          },
          {
            type: 'input',
            name: 'keywords',
            message: 'Keywords',
            default: moduleName
          },
          {
            type: 'input',
            name: 'license',
            message: 'license',
            default: 'ISC'
          },
          {
            type: 'list',
            name: 'typescript',
            message: '是否使用typescript?',
            choices: [{
                name: 'Yes',
                value: true
            },{
                name: 'No',
                value: false
            }]
        },
        {
            type: 'list',
            name: 'lint',
            message: '是否开启es/ts-lint?',
            choices: [{
                name: 'Yes',
                value: true
            },{
                name: 'No',
                value: false
            }]
        },
        {
            type: 'list',
            name: 'test',
            message: '是否使用单元测试?',
            choices: [{
                name: 'Yes',
                value: true
            },{
                name: 'No',
                value: false
            }]
        }
    ])
    createProject(moduleName, config, tc)
}