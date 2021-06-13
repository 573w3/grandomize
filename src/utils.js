const MAX = 1000000; // one million

const sanitizeCount = (count) => {
  if (!count || count < 1) {
    return 1;
  }

  return Math.min(count, MAX);
};

exports.sanitizeCount = sanitizeCount;
