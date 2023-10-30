// Given an integer array nums, find the subarray with the largest sum, and return its sum.

// [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Starts from index 1
// 1st loop - is 1 bigger or 1 + (-2) ? - we take the max of the 2
// 2nd loop - is -3 bigger or -3 + (dpArr[2])
function maxSubArray(nums) {
  const dpArr = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    dpArr.push(Math.max(nums[i], nums[i] + dpArr[i - 1]));
  }

  return dpArr.sort((a, b) => a - b)[dpArr.length - 1];
}

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

module.exports = maxSubArray;
