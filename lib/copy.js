/**
 * @name copy文件
 * 
 */

const fs = require('fs');

module.exports =  (dist, src) => {
  fs.writeFileSync(dist, fs.readFileSync(src))
}