"use strict";

const assert = require("assert");
const test = require("eatest");
const isParamValues = require("../src/isParamValues");

test("isParamValues -> true", () => {
  assert(isParamValues([]) === true);
  assert(isParamValues([ 0, 1, 2 ]) === true);
  assert(isParamValues([ 0, 1, Infinity ]) === true);
  assert(isParamValues([ "0", "1", "Infinity" ]) === true);
});


test("isParamValues -> false", () => {
  assert(isParamValues([ "0", "1", "nan" ]) === false);
  assert(isParamValues([ 0, 1, NaN ]) === false);
  assert(isParamValues(0) === false);
  assert(isParamValues(undefined) === false);
});
