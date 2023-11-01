const matchingStr = (strings, queries) => {
  const frequencyResults = [];
  for (let query of queries) {
    const matchingQueries = strings.filter((str) => str === query);
    frequencyResults.push(matchingQueries.length);
  }
  return frequencyResults;
};

console.log(matchingStr(['ab', 'ab', 'abc'], ['ab', 'abc', 'bc']));
