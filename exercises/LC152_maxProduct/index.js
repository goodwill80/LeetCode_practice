// Max Product sub array

function maxProduct(nums) {
  // We established a minArr to account for product of negative numbers
  const dpArrMax = [nums[0]];
  const dpArrMin = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    dpArrMax.push(
      Math.max(nums[i], nums[i] * dpArrMax[i - 1], nums[i] * dpArrMin[i - 1])
    );
    dpArrMin.push(
      Math.min(nums[i], nums[i] * dpArrMax[i - 1], nums[i] * dpArrMin[i - 1])
    );
  }

  return dpArrMax.sort((a, b) => a - b)[dpArrMax.length - 1];
}

console.log(maxProduct([-2, 3, -4]));

module.exports = maxProduct;
