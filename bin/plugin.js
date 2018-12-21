#!/usr/bin/env node 
const program = require('commander')
const init = require('../lib/init')
const fs = require('fs')
const chalk = require('chalk')


program.usage('[Project]')
        .option('-v, --version', 'show version number')
        .parse(process.argv)

const argsLen = program.args.length;

if (argsLen === 0) {
    program.help();
} else if (argsLen === 1) {
if (fs.existsSync(program.args[0])) {
    console.log(chalk.bgRed('This name is already exists!'));
    process.exit();
}
init(program.args[0]);
} else {
    console.log(chalk.bgRed('Project name invalid!'));
}