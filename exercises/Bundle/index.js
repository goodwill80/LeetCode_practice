// store A - 20 books for $24
// store B - 1 book for $2

// Given a budget, what is the max books u can buy with costs above?

const bookStore = (budget) => {
  let max = Math.floor(budget / 2);
  const bundleCost = 24;
  const bookCost = 2;

  if (budget < 2) {
    return 0;
  }

  if (budget < bundleCost) {
    return Math.floor(budget / bookCost);
  }

  for (let i = 1; i < Math.ceil(budget / bundleCost); i++) {
    let bundle = 0;
    let bundleBooks = 0;
    if (budget >= bundleCost * i) {
      bundle = bundleCost * i;
      bundleBooks = 20 * i;
    }
    let singleBooks =
      budget % bundle > 0 ? Math.floor((budget % bundle) / bookCost) : 0;

    max = Math.max(singleBooks + bundleBooks, max);
  }

  return max;
};

console.log(bookStore(10000));
