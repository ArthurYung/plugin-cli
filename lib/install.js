const {spawn} = require('child_process')
const hasyarn = require('./hasyarn')()

const chalk = require('chalk')

module.exports = (name, tc, ora) => {

  const command = tc ? 'tnpm' : (hasyarn ? 'yarn' : 'npm')
  const args = []

  if (!hasyarn) {
    args.push('install', '--loglevel', 'error')
  } else {
    args.push('add')
  }
  
  const child = spawn(/^win/.test(process.platform) ? `${command}.cmd` : command, args, {
    cwd: name,
    stdio: hasyarn ? 'pipe' : 'inherit'
  })

  if (hasyarn) {
    child.stdout.on('data', buffer => {
      let str = buffer.toString().trim()
      if (str && hasyarn && str.indexOf('"type":') !== -1) {
        
        const newLineIndex = str.lastIndexOf('\n')
        let progressTotal = 0

        if (newLineIndex !== -1) {

          str = str.substr(newLineIndex)

        }
        try {

          const data = JSON.parse(str)

          if (data.type === 'step') {
            ora.text = data.data.message
          } else if (data.type === 'progressStart') {
            progressTotal = data.data.total
          } else if (data.type === 'progressTick') {
            const time = Date.now()
            if (time - progressTime > 20) {
              ora.text = `正在下载... ${data.data.current / progressTotal}%`
            }
          } else {
            ora.text = '下载完成'
          }
        } catch (e) {
          console.error(e)
          console.log(str)
        }
      } else {
        process.stdout.write(buffer)
      }
    })
  } else {
    ora.succeed('准备下载...')
  }
  child.on('close', (status) => {
    if (status !== 0) {
      ora.fail(chalk.bgRed('安装失败，请手动安装依赖包'))
    } else {
      ora.succeed(chalk.green('项目已生成！'))
    }
  })
}