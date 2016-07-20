"use strict";

const assert = require("assert");
const test = require("eatest");
const isUnits = require("../src/isUnits");

test("isUnits -> true", () => {
  assert(isUnits([]) === true);
  assert(isUnits([ [ "Name", 0, 0, [], [] ] ], 0) === true);
  assert(isUnits([ [ "Name", 0, 0, [ [ -1, 0 ] ], [] ] ], 1) === true);
  assert(isUnits([ [ "Name", 0, 0, [], [ 2 ] ] ], 0) === true);
  assert(isUnits([ [ "Name", 0, 0, [], [ 2 ] ], [ "Name", 0, 0, [], [] ] ], 0) === true);
  assert(isUnits([ [ "Name", 0, 0, [], [ 2 ] ], [ "Name", 0, 0, [ [ 0, 0 ] ], [ 2 ] ] ], 0) === true);
  assert(isUnits(undefined) === false);
});

test("isUnits -> false", () => {
  assert(isUnits([ [] ]) === false);
  assert(isUnits([ [ null, 0, 0, [], [] ] ], 0) === false);
  assert(isUnits([ [ "Name", 4, 0, [], [] ] ], 0) === false);
  assert(isUnits([ [ "Name", 0, -1, [], [] ] ], 0) === false);
  assert(isUnits([ [ "Name", 0, 0, null, [] ] ], 0) === false);
  assert(isUnits([ [ "Name", 0, 0, [], null ] ], 0) === false);
  assert(isUnits([ [ "Name", 0, 0, [ [ -1, 1 ] ], [] ] ], 1) === false);
  assert(isUnits([ [ "Name", 0, 0, [ null ], [] ] ], 1) === false);
  assert(isUnits([ [ "Name", 0, 0, [ [ -1 ] ], [] ] ], 1) === false);
  assert(isUnits([ [ "Name", 0, 0, [], [ 4 ] ] ], 0) === false);
  assert(isUnits([ [ "Name", 0, 0, [], [ 2 ] ], [ "Name", 0, 0, [ [ 1, 0 ] ], [ 2 ] ] ], 0) === false);
  assert(isUnits([ [ "Name", 0, 0, [], [ 2 ] ], [ "Name", 0, 0, [ [ 0, 1 ] ], [ 2 ] ] ], 0) === false);
  assert(isUnits(undefined) === false);
});
