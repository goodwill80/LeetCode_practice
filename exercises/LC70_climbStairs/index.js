// Steps    Ways
// 1        1           [1]
// 2        2           [1, 1] , [2]
// 3        3           [1,1,1], [2,1], [1,2]
// 4        5           [1,1,2], [2,2], [1,2,1], [2,1,1], [1,1,1,1]
// 5        5 + 3 = 8
// 6        8 + 5 = 13

// Notice the number of steps from 1 to 3 correspond to the number of ways
// While the number of steps from 4 onwards is a fibonnacci seq (arr[n - 2] + arr[n - 1])

const climbStairs = (n) => {
  if (n <= 3) return n;

  let ways = [0, 1, 2, 3];

  for (let i = 4; i <= n; i++) {
    ways.push(ways[i - 1] + ways[i - 2]);
  }

  console.log(ways);
};

// climbStairs(6);

// Using pointers
const climbStairs2 = (n) => {
  if (n <= 3) return n;

  let first = 1;
  let second = 2;

  for (let i = 3; i <= n; i++) {
    let third = first + second;
    first = second;
    second = third;
  }

  return second;
};

console.log(climbStairs2(5));

module.exports = climbStairs;
