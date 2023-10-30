const threeSum = (nums) => {
  // Sort the arr
  const sorted = nums.sort((a, b) => a - b);
  const container = [];

  // Loop through the arr
  for (let i = 0; i < sorted.length; i++) {
    let target = 0 - sorted[i];

    let left = i + 1;
    let right = sorted.length - 1;

    if (i > 0 && sorted[i] === sorted[i - 1]) {
      continue;
    }

    while (left < right) {
      if (target === sorted[left] + sorted[right]) {
        container.push([sorted[i], sorted[left], sorted[right]]);
        left++;
        while (sorted[left] === sorted[left - 1]) {
          left++;
        }
      } else if (sorted[left] + sorted[right] < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  console.log(container);
};

threeSum([-1, 0, 1, 2, -1, -4]);

module.exports = threeSum;
