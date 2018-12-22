const exec = require('child_process').exec

module.exports = (name) => {
    exec(`npm install --loglevel error`,{ cwd: name }, (a,b,c)=>{console.log(a,b,c)})
}