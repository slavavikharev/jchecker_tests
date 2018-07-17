module.exports = [{
    "type": "fact",
    "tests": [{
        "input": 1,
        "expected": 1
    }, {
        "input": 2,
        "expected": 2
    }, {
        "input": 5,
        "expected": 120
    }]
}, {
    "type": "nod",
    "tests": [{
        "input": [54, 24],
        "expected": 6
    }, {
        "input": [24, 54],
        "expected": 6
    }, {
        "input": [1, 1],
        "expected": 1
    }, {
        "input": [0, 0],
        "expected": 0
    }]
}]