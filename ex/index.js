const [ ,, param ] = process.argv

console.log(param)

const a = require('./a')
module.exports = () => a(param)
