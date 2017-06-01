"use strict";

const isPlainObject = require("lodash.isplainobject");
const isName = require("./isName");
const isConsts = require("./isConsts");
const isParamValues = require("./isParamValues");
const isParamIndices = require("./isParamIndices");
const isUnits = require("./isUnits");
const isVariants = require("./isVariants");

function validate(synthdef, strict) {
  if (Array.isArray(synthdef)) {
    return synthdef.every(synthdef => _validate(synthdef, strict));
  }
  return _validate(synthdef, strict);
}

function _validate(synthdef, strict) {
  if (!isPlainObject(synthdef)) {
    return false;
  }
  if (!isName(synthdef.name)) {
    return false;
  }
  if (!isConsts(synthdef.consts)) {
    return false;
  }
  if (synthdef.paramValues != null) {
    if (!isParamValues(synthdef.paramValues)) {
      return false;
    }
    if (!isParamIndices(synthdef.paramIndices, synthdef.paramValues.length)) {
      return false;
    }
  } else if (strict) {
    return false;
  }
  if (!isUnits(synthdef.units, synthdef.consts.length)) {
    return false;
  }
  if (strict) {
    if (!isVariants(synthdef.variants)) {
      return false;
    }
  }
  return true;
}

module.exports = { validate };
