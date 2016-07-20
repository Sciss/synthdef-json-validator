"use strict";

const isPlainObject = require("lodash.isplainobject");
const toValues = require("lodash.values");

function isVariants(value, numberOfParams) {
  return isPlainObject(value) && toValues(value).every(value => isValidVariantValue(value, numberOfParams));
}

function isValidVariantValue(value, numberOfParams) {
  if (!Array.isArray(value)) {
    return false;
  }
  if (value.length !== numberOfParams) {
    return false;
  }
  return value.every(x => !Number.isNaN(+x));
}

module.exports = isVariants;
