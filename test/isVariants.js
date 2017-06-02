"use strict";

const assert = require("assert");
const test = require("eatest");
const isVariants = require("../src/isVariants");

test("isVariants -> true", () => {
  assert(isVariants({}, 0) === true);
  assert(isVariants({}, 1) === true);
  assert(isVariants({ a: [ 1 ], b: [ 2 ] }, 1) === true);

  assert(isVariants([], 0) === true);
  assert(isVariants([], 1) === true);
  assert(isVariants([
    { name: "a", values: [ 1 ] },
    { name: "b", values: [ 2 ] }
  ], 1) === true);
});

test("isVariants -> false", () => {
  assert(isVariants({ a: null }, 0) === false);
  assert(isVariants({ a: [ 1 ], b: [ 2, 3 ] }, 1) === false);
  assert(isVariants(undefined) === false);

  assert(isVariants([
    { name: "a", values: null }
  ], 0) === false);
  assert(isVariants([
    { name: "a", values: [ 1 ] },
    { name: "b", values: [ 2, 3 ] }
  ], 1) === false);
  assert(isVariants([
    { name: "a", values: [ 1 ] },
    { name: "a", values: [ 2 ] }
  ], 1) === false);
  assert(isVariants(undefined) === false);
});
