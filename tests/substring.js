module.exports = [{
    "input": ["abcde", "c"],
    "expected": [2]
}, {
    "input": ["abcde", "cd"],
    "expected": [2]
}, {
    "input": ["abcde", "abcde"],
    "expected": [0]
}, {
    "input": ["abcde", "abcd"],
    "expected": [0]
}, {
    "input": ["abcd", "abcde"],
    "expected": []
}, {
    "input": ["abcdc", "c"],
    "expected": [2, 4]
}, {
    "input": ["cbcbc", "cbc"],
    "expected": [0, 2]
}, {
    "input": ["cbcbc", "cb"],
    "expected": [0, 2]
}, {
    "input": ["abc", ""],
    "expected": []
}, {
    "input": ["", "abc"],
    "expected": []
}, {
    "input": ["ccccc", "ccc"],
    "expected": [0, 1, 2]
}]
