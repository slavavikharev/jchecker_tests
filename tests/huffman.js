const assert = require('assert')
const { NodeVM } = require('vm2')

const tests = [{
    args: [3],
    expected: 3,
    expectFunc (res) {
        return [
            this.expected === res,
            `Result ${res} is not equal to expected ${this.expected} for input ${this.args}`
        ]
    }
}]

const performTest = ({ body, path }, { args, expectFunc }) => {
    let vm = new NodeVM({
        require: {
            external: true,
            builtin: ['*']
        },
        sandbox: {
            process: {
                argv: [null, null, ...args]
            }
        }
    })

    let result = vm.run(body, path)()
    return assert.ok(...expectFunc(result))
}

module.exports = (indexFile) => {
    let result = tests.map(test => performTest(indexFile, test))
    console.log(result)
}
