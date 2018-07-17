const chr = String.fromCharCode

module.exports = [{
    "type": "escape",
    "tests": [{
        "type": "encode",
        "tests": [{
            "input": `${"a".repeat(511)}`,
            "expected": `#${chr(255)}a#${chr(255)}aa`
        }, {
            "input": `aaabbc`,
            "expected": `aaabbc`
        }, {
            "input": `#${"b".repeat(36)}#${"a".repeat(25)}#`,
            "expected": `#${chr(1)}##${chr(36)}b#${chr(1)}##${chr(25)}a#${chr(1)}#`
        }, {
            "input": ``,
            "expected": ``
        }]
    }, {
        "type": "decode",
        "tests": [{
            "input": `#${chr(255)}a#${chr(255)}aa`,
            "expected": `${"a".repeat(511)}`
        }, {
            "input": `aaabbc`,
            "expected": `aaabbc`
        }, {
            "input": `#${chr(1)}##${chr(36)}b#${chr(1)}##${chr(25)}a#${chr(1)}#`,
            "expected": `#${"b".repeat(36)}#${"a".repeat(25)}#`
        }, {
            "input": ``,
            "expected": ``
        }]
    }]
}, {
    "type": "jump",
    "tests": [{
        "type": "encode",
        "tests": [{
            "input": `abcde`,
            "expected": `${chr(5)}abcde`
        }, {
            "input": `aaaabc`,
            "expected": `${chr(128 + 4)}a${chr(2)}bc`
        }, {
            "input": ``,
            "expected": ``
        }]
    }, {
        "type": "decode",
        "tests": [{
            "input": `${chr(5)}abcde`,
            "expected": `abcde`
        }, {
            "input": `${chr(128 + 4)}a${chr(2)}bc`,
            "expected": `aaaabc`
        }, {
            "input": ``,
            "expected": ``
        }]
    }]
}]
