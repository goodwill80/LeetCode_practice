function isSameTree(p, q) {
  let sameTree = true;

  const checkSameTree = (p, q) => {
    if (!p && !q) return;
    if (p.val !== q.val) sameTree = false;
    if (!p || !q) sameTree = false;

    checkSameTree(p.left, q.right);
    checkSameTree(p.right, q.right);
  };

  checkSameTree(p, q);
  return sameTree;
}

module.exports = isSameTree;
