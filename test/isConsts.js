"use strict";

const assert = require("assert");
const test = require("eatest");
const isConsts = require("../src/isConsts");

test("return true when all items can convert to a numeric", () => {
  assert(isConsts([]) === true);
  assert(isConsts([ 0, 1, 2 ]) === true);
  assert(isConsts([ 0, 1, Infinity ]) === true);
  assert(isConsts([ "0", "1", "Infinity" ]) === true);
});

test("return false when not provided an array", () => {
  assert(isConsts(0) === false);
  assert(isConsts(undefined) === false);
});

test("return false when includes nan", () => {
  assert(isConsts([ "0", "1", "nan" ]) === false);
  assert(isConsts([ 0, 1, NaN ]) === false);
});
