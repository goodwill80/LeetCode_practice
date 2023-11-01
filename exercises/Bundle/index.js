// store A - 20 books for $24
// store B - 1 book for $2

const bookStore = (budget) => {
  const dp = [];
  const bundleCost = 24;
  const bookCost = 2;
  dp.push(Math.floor(budget / 2));

  if (budget < 2) {
    return 0;
  }

  if (budget < bundleCost) {
    return Math.floor(budget / bookCost);
  }

  for (let i = 1; i < Math.ceil(budget / 24); i++) {
    let bundle = 0;
    let bundleBooks = 0;
    if (budget >= bundleCost * i) {
      bundle = bundleCost * i;
      bundleBooks = 20 * i;
    }
    let singleBooks =
      budget % bundle > 0 ? Math.floor((budget % bundle) / bookCost) : 0;

    dp.push(singleBooks + bundleBooks);
  }

  return Math.max(...dp);
};

console.log(bookStore(25));
