"use strict";

/**
 * Generates an integer in the range [0, max].
 * @param {number} max Upper number limit of generated numbers.
 * @returns The generated integer.
 */
const randomInt = (max) => {
  let numberString = Math.random().toString();
  const notZero = numberString.length > 2;
  if (notZero) {
    numberString = numberString.slice(2);
  }

  return parseInt(numberString) % (max + 1);
};

const randomBoolean = () => {
  return randomInt(1) === 1;
};

exports.randomInt = randomInt;
exports.randomBoolean = randomBoolean;
