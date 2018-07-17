const path = require('path')
const tests = require('./tests')

const [ ,, taskName, taskDir ] = process.argv
let resolvedTaskDir = path.resolve(taskDir)

let testingResult = tests(taskName, resolvedTaskDir)

console.info(testingResult)
