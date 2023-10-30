// Given an array of integers, return an array of indices of the two numbers
// that add up to the target.
// You may assume that each input would have exactly one solution, and
// you may not use the same element twice.
// --- Examples
// twoSum([2,7,11,15], 9) --> [0,1]
// twoSum([3,5,4], 9) --> [1,2]

function twoSum(arr, target) {
  const map = {};

  for (let num of arr) {
    map[target - num >= 0 ? target - num : 0] = num;
  }

  let container = [];

  for (let i = 0; i < arr.length; i++) {
    if (map[target - arr[i]]) {
      container = [
        arr.indexOf(map[target - arr[i]]),
        arr.indexOf(target - arr[i]),
      ];
    }
  }

  console.log(container);
}

// twoSum([3, 5, 4], 9);

const twoSum2 = (arr, target) => {
  const sorted = arr.sort((a, b) => a - b);

  let x = 0;
  let y = arr.length - 1;

  const container = [];

  while (x < y) {
    if (sorted[x] + sorted[y] > target) {
      y--;
    } else if (sorted[x] + sorted[y] < target) {
      x++;
    } else if (sorted[x] + sorted[y] === target) {
      container.push(x);
      container.push(y);
      break;
    }
  }

  console.log(container);
};

twoSum2([2, 7, 11, 15], 9);

module.exports = twoSum;
