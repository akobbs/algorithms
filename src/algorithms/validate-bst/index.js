export class Node {
  constructor(value, left, right) {
    this.value = value
    this.left = left
    this.right = right
  }
}

// O(n) time | O(h) space, where h is the height of the tree
export default function isBST(root) {
  return isBSTUtil(root, -Infinity, Infinity)
}

function isBSTUtil(node, minValue, maxValue) {
  if (!node) {
    return true
  }

  if (node.value < minValue || node.value > maxValue) {
    return false
  }

  const isLeftBST = isBSTUtil(node.left, minValue, node.value)
  const isRightBST = isBSTUtil(node.right, node.value, maxValue)

  return isLeftBST && isRightBST
}
