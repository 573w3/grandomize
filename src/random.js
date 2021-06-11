exports.randomInt = (max) => {
  let numberString = Math.random().toString();
  const notZero = numberString.length > 2;
  if (notZero) {
    numberString = numberString.slice(2);
  }

  return parseInt(numberString) % (max + 1);
};
