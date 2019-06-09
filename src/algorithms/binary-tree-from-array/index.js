export class Node {
  constructor(value, left, right) {
    this.value = value
    this.left = left
    this.right = right
  }
}

// Recursive
// O(n) time | O(h) space, where h is the height of the tree
export default function createBinaryTree(array) {
  return createBinaryTreeHelper(array, 0)
}

function createBinaryTreeHelper(array, idx) {
  if (idx >= array.length) {
    return null
  }

  const value = array[idx]
  const node = new Node(value)

  const leftChildIdx = getLeftChildIndex(idx)
  node.left = createBinaryTreeHelper(array, leftChildIdx)

  const rightChildIdx = getRightChildIndex(idx)
  node.right = createBinaryTreeHelper(array, rightChildIdx)

  return node
}

function getLeftChildIndex(parentIdx) {
  return 2 * parentIdx + 1
}

function getRightChildIndex(parentIdx) {
  return 2 * parentIdx + 2
}

export function breadFirstTraversal(rootNode, callback) {
  const queue = []
  queue.push(rootNode)

  while (queue.length > 0) {
    const node = queue.shift()

    callback(node.value)

    if (node.left) {
      queue.push(node.left)
    }

    if (node.right) {
      queue.push(node.right)
    }
  }
}
