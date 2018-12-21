/**
 * 
 * @name cloneGit项目到本地
 * 
 * @param {string} url git路径
 * @param {string} targetPath 项目路径
 * @param {function} cb 回调函数
 * 
 */

const spawn = require('child_process').spawn;

module.exports = (url, targetPath, cb) => {

    const git = 'git'
    const args = ['clone', '--depth', '1']

    args.push(url)
    args.push(targetPath)

    const process = spawn(git, args)
    
    
    process.on('close', (status) => {
        if (status == 0) {

            const _args = ['checkout', 'master'];
            const _process = spawn(git, _args, { cwd: targetPath });

            _process.on('close', function(_status) {
                if (_status == 0) {
                    cb && cb();
                } else {
                    cb && cb(new Error("'git checkout' failed with status " + _status));
                }
            });

        } else {
            cb && cb(new Error("'git clone' failed with status " + status));
        }
    })
    process.stdout.on('data', buff => console.log(buff))
}

