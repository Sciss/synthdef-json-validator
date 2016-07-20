"use strict";

const assert = require("assert");
const test = require("eatest");
const isName = require("../src/isName");

test("return true when provided a string", () => {
  assert(isName("") === true);
  assert(isName("name") === true);
});

test("return false when not provided a string", () => {
  assert(isName(0) === false);
  assert(isName(undefined) === false);
});
