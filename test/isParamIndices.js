"use strict";

const assert = require("assert");
const test = require("eatest");
const isParamIndices = require("../src/isParamIndices");

test("isParamIndices", () => {
  assert(isParamIndices([], 0) === true);
  assert(isParamIndices([
    { name: "a", index: 0, length: 1 }
  ], 1) === true);
  assert(isParamIndices([
    { name: "a", index: 0, length: 2 },
    { name: "b", index: 2, length: 1 }
  ], 3) === true);
});

test("isParamIndices -> false", () => {
  assert(isParamIndices([], 1) === false);
  assert(isParamIndices([
     { name: "a", index: 0, length: 1 }
  ], 2) === false);
  assert(isParamIndices([
    { name: "a", index: 0, length: 2 }
  ], 1) === false);
  assert(isParamIndices([
    { name: "a", index: 0, length: 1 },
    { name: "b", index: 2, length: 1 }
  ], 3) === false);
  assert(isParamIndices([
    { name: "a", index: 0, length: 2 },
    { name: "b", index: 1, length: 2 }
  ], 3) === false);
  assert(isParamIndices([
    { name: "a", index: 0.5, length: 1 }
  ], 1) === false);
  assert(isParamIndices([
    { name: "a", index: 0, length: -1 }
  ], 1) === false);
  assert(isParamIndices([
    { name: "a", index: 0, length: 2 },
    { name: "a", index: 2, length: 1 }
  ], 3) === false);
  assert(isParamIndices(undefined, 0) === false);
});
