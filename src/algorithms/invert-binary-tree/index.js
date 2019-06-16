// Recursive
// O(n) time | O(h) space, where h is height of the tree
export function invertBinaryTree1(node) {
  if (node) {
    swapChildren(node)
    invertBinaryTree1(node.left)
    invertBinaryTree1(node.right)
  }
}

// Iterative
// O(n) time | O(n) space
export function invertBinaryTree2(rootNode) {
  const queue = [rootNode]

  while (queue.length > 0) {
    const node = queue.shift()

    if (node) {
      swapChildren(node)
      queue.push(node.left)
      queue.push(node.right)
    }
  }
}

function swapChildren(node) {
  const temp = node.right
  node.right = node.left
  node.left = temp
}
