function invertTree(root) {
  // Helper function to swop nodes
  const swop = (node) => {
    if (!node) return;

    const temp = node.left;
    node.left = node.right;
    node.right = temp;

    swop(node.left);
    swop(node.right);
  };

  swop(root);
  return root;
}

module.exports = invertTree;
