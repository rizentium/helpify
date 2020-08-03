const assert = require("assert");
const Str = require("./dist");

assert.deepStrictEqual(Str.lower('Test Lower'), 'test lower');