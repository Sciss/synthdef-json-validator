"use strict";

function isConsts(value) {
  return Array.isArray(value) && value.every(isValidConstValue);
}

function isValidConstValue(value) {
  return !Number.isNaN(+value);
}

module.exports = isConsts;
