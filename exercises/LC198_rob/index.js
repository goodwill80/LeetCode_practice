// [1,3,2,4,3,5, 2]
// House Robber Leetcode question

function rob(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      evenSum += nums[i];
    } else if (i % 2 !== 0) {
      oddSum += nums[i];
    }
  }

  console.log(Math.max(evenSum, oddSum));
}

// rob([2, 6, 5]);

function rob2(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  let maxLootAtNth = [nums[0], Math.max(nums[0], nums[1])];

  for (let i = 2; i < nums.length; i++) {
    maxLootAtNth.push(Math.max(nums[i] + nums[i - 2], nums[i - 1]));
  }

  console.log(maxLootAtNth[maxLootAtNth.length - 1]);
}

rob2([2, 6, 5]);

module.exports = rob;
