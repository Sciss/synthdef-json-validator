"use strict";

const assert = require("assert");
const test = require("eatest");
const validator = require("../src");

test("empty object", () => {
  const synthdef = {};

  assert(validator.validate(synthdef) === false);
});

test("empty synthdef", () => {
  const synthdef = {
    name: "",
    consts: [],
    paramValues: [],
    paramIndices: {},
    units: [],
    variants: {}
  };

  assert(validator.validate(synthdef) === true);
  assert(validator.validate(synthdef, true) === true);
});

test("synthdef", () => {
  const synthdef = {
    name: "sine",
    consts: [ 0 ],
    paramValues: [ 0.5, 440 ],
    paramIndices: { amp: { index: 0, length: 1 }, freq: { index: 1, length: 1 } },
    units: [
      [ "Control"     , 1, 0, [                                ], [ 1, 1 ] ],
      [ "SinOsc"      , 2, 0, [ [  0, 1 ], [ -1, 0 ]           ], [ 2    ] ],
      [ "BinaryOpUGen", 2, 2, [ [  1, 0 ], [  0, 0 ]           ], [ 2    ] ],
      [ "Out"         , 2, 0, [ [ -1, 0 ], [  2, 0 ], [ 2, 0 ] ], [      ] ]
    ]
  };

  assert(validator.validate(synthdef) === true);
  assert(validator.validate(synthdef, true) === false);
});

test("synthdef[]", () => {
  const synthdef = [
    { name: "", consts: [], paramValues: [], paramIndices: {}, units: [] }
  ];

  assert(validator.validate(synthdef) === true);
});
