function TreeNode(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function Tree(array) {
  this.root = buildTree(array);

  function buildTree(array) {
    if (array.length === 0) {
      return null;
    }

    const midIndex = Math.floor(array.length / 2);
    const rootNode = new TreeNode(array[midIndex]);

    rootNode.left = buildTree(array.slice(0, midIndex));
    rootNode.right = buildTree(array.slice(midIndex + 1));

    return rootNode;
  }

  this.insert = function (data) {
    // Define insert as a method
    this.root = insert(this.root, data);
  };

  function insert(node, data) {
    if (node === null) {
      return new TreeNode(data);
    }
    if (data < TreeNode.data) {
      node.left = insert(node.left, data);
    } else {
      node.right = insert(node.right, data);
    }

    return node;
  }
  return this;
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

const tree = new Tree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
prettyPrint(tree.root);
console.log("------------------------REPRINT--------------------------");
prettyPrint(tree.root);
