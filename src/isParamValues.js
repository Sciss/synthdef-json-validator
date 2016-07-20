"use strict";

function isParamValues(value) {
  return Array.isArray(value) && value.every(isValidParamValue);
}

function isValidParamValue(value) {
  return !Number.isNaN(+value);
}

module.exports = isParamValues;
