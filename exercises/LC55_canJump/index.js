function canJump(nums) {
  let dpPosition = new Array(nums.length).fill(false);
  dpPosition[0] = true;

  for (let j = 1; j < nums.length; j++) {
    for (let i = 0; i < j; i++) {
      if (dpPosition[i] && i + nums[j] >= j) {
        dpPosition[j] = true;
        break;
      }
    }
  }

  return dpPosition[dpPosition.length - 1];
}

console.log(canJump([3, 2, 1, 0, 4]));

module.exports = canJump;
