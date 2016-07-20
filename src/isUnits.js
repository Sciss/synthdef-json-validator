"use strict";

function isUnits(value, numberOfConsts) {
  if (!Array.isArray(value)) {
    return false;
  }
  return value.every((spec, index) => {
    if (!isValidName(spec[0])) {
      return false;
    }
    if (!isValidRate(spec[1])) {
      return false;
    }
    if (!isValidSpecialIndex(spec[2])) {
      return false;
    }
    if (!isValidOutput(spec[4])) {
      return false;
    }
    if (!isValidInput(spec[3], value, index, numberOfConsts)) {
      return false;
    }
    return true;
  });
}

function isValidName(value) {
  return typeof value === "string";
}

function isValidRate(value) {
  return [ 0, 1, 2, 3 ].indexOf(value) !== -1;
}

function isValidSpecialIndex(value) {
  return isPositiveInteger(value);
}

function isValidInput(value, units, index, numberOfConsts) {
  if (!Array.isArray(value)) {
    return false;
  }
  return value.every(value => isValidInputSpec(value, index, units, numberOfConsts));
}

function isValidInputSpec(spec, index, units, numberOfConsts) {
  if (!Array.isArray(spec)) {
    return false;
  }
  if (spec.length !== 2) {
    return false;
  }
  if (spec[0] === -1) {
    return isPositiveInteger(spec[1]) && spec[1] < numberOfConsts;
  }
  if (!isPositiveInteger(spec[0]) || index <= spec[0]) {
    return false;
  }
  if (units[spec[0]] && !isValidRate(units[spec[0]][4][spec[1]])) {
    return false;
  }
  return true;
}

function isValidOutput(value) {
  if (!Array.isArray(value)) {
    return false;
  }
  return value.every(isValidRate);
}

function isPositiveInteger(value) {
  return Math.abs(value|0) === value;
}

module.exports = isUnits;
