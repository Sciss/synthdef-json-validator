"use strict";

const isPlainObject = require("lodash.isplainobject");
const toValues = require("lodash.values");
const sum = require("lodash.sum");

function isParamIndices(value, numberOfParams) {
  if (!isPlainObject(value)) {
    return false;
  }
  const values = toValues(value);

  if (!values.every(isValidParamIndex)) {
    return false;
  }

  const slots = values.reduce(fillSlot, []);

  return slots.length === numberOfParams && sum(slots) === numberOfParams;
}

function isValidParamIndex(value) {
  if (!isPositiveInteger(value.index)) {
    return false;
  }
  if (!isPositiveInteger(value.length)) {
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

function isPositiveInteger(value) {
  return Math.abs(value|0) === value;
}

module.exports = isParamIndices;
