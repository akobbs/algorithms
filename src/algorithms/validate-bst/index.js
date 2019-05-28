export class Node {
  constructor(value, left, right) {
    this.value = value
    this.left = left
    this.right = right
  }
}

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

  const isLeftBST = this.isBSTUtil(node.left, minValue, node.value)
  const isRightBST = this.isBSTUtil(node.right, node.value, maxValue)

  return isLeftBST && isRightBST
}
