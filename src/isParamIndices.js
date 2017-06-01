"use strict";

const uniq = require("lodash.uniq");
const sum = require("lodash.sum");

function isParamIndices(paramIndices, numberOfParams) {
  if (!Array.isArray(paramIndices)) {
    return false;
  }

  if (!paramIndices.every(isValidParamIndex)) {
    return false;
  }

  const paramNames = paramIndices.map(paramIndex => paramIndex.name);

  if (paramNames.length !== uniq(paramNames).length) {
    return false;
  }

  const slots = paramIndices.reduce(fillSlot, []);

  return slots.length === numberOfParams && sum(slots) === numberOfParams;
}

function isValidParamIndex(paramIndex) {
  if (!isParamName(paramIndex.name)) {
    return false;
  }
  if (!isPositiveInteger(paramIndex.index)) {
    return false;
  }
  if (!isPositiveInteger(paramIndex.length)) {
    return false;
  }
  return true;
}

function fillSlot(slots, { index, length }) {
  for (let i = index; i < index + length; i++) {
    slots[i] = slots[i] ? (slots[i] + 1) : 1;
  }
  return slots;
}

function isParamName(value) {
  return typeof value === "string" && /^[_a-zA-Z]\w*$/.test(value);
}

function isPositiveInteger(value) {
  return Math.abs(value|0) === value;
}

module.exports = isParamIndices;
