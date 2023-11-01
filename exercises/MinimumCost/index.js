// Given an array of ratings for n books. Find the minimum cost to buy all books with below conditions :

// Cost of every book would be at-least 1 dollar.
// A book has higher cost than an adjacent (left or right) if rating is more than the adjacent.

const minimumCost = (ratings) => {
  const dp = new Array(ratings.length).fill(1);
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      dp[i] = dp[i - 1] + 1;
    } else {
      dp[i] = dp[i] === 1 ? 1 : dp[i] - 1;
    }
  }

  console.log(dp.reduce((a, b) => a + b));
};

minimumCost([1, 6, 8, 3, 4, 1, 5, 7]);
