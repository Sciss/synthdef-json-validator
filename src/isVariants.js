"use strict";

const uniq = require("lodash.uniq");

function isVariants(variants, numberOfParams) {
  if (!Array.isArray(variants)) {
    return false;
  }

  for (let i = 0; i < variants.length; i++) {
    if (!isValidVariant(variants[i], numberOfParams)) {
      return false;
    }
  }

  const variantNames = variants.map(variant => variant.name);

  if (variantNames.length !== uniq(variantNames).length) {
    return false;
  }

  return true;
}

function isValidVariant(variant, numberOfParams) {
  if (!isVariantName(variant.name)) {
    return false;
  }
  if (!Array.isArray(variant.values)) {
    return false;
  }
  if (variant.values.length !== numberOfParams) {
    return false;
  }
  return variant.values.every(isValidVariantValue);
}

function isVariantName(value) {
  return typeof value === "string" && /^[_a-zA-Z]\w*$/.test(value);
}

function isValidVariantValue(value) {
  return !Number.isNaN(+value);
}

module.exports = isVariants;
