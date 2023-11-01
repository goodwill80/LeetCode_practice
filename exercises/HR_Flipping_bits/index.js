const flippingBits = (n) => {
  const container = [];

  let quotion = n;

  while (quotion > 0) {
    container.push(quotion % 2);
    quotion = Math.floor(quotion / 2);
  }

  const tempArr = new Array(32 - container.length).fill(0);
  const binaryDigits = tempArr.join('') + container.join('');

  const flipBinary = binaryDigits
    .split('')
    .map((num) => (num === '0' ? '1' : '0'))
    .map((num) => Number(num));

  let multiplierContainer = [1];
  let multiplier = 1;
  for (let i = 1; i < 32; i++) {
    multiplier *= 2;
    multiplierContainer.push(multiplier);
  }

  multiplierContainer = multiplierContainer.reverse();

  let total = 0;

  for (let i = 0; i < flipBinary.length; i++) {
    total += flipBinary[i] * multiplierContainer[i];
  }

  return total;
};

flippingBits(9);
