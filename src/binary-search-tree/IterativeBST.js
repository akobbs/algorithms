class Node {
  constructor(key, value, left = null, right = null) {
    this.key = key
    this.value = value
    this.left = left
    this.right = right
  }
}

export default class BinarySearchTree {
  constructor() {
    this.root = null
  }

  // Θ(n)
  inOrderTraverse(callback, node = this.root) {
    const stack = []

    let currentNode = node
    while (currentNode || stack.length > 0) {
      while (currentNode.left) {
        stack.push(currentNode)
        currentNode = currentNode.left
      }

      currentNode = stack.pop()
      callback({key: currentNode.key, value: currentNode.value})
      currentNode = currentNode.right
    }
  }

  // O(h), where h is the height of the tree
  get(key, node = this.root) {
    let currentNode = node

    while (currentNode && currentNode.key !== key) {
      if (key < currentNode.key) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }

    return currentNode
  }

  // O(h), where h is the height of the tree
  min(node = this.root) {
    if (!node) {
      return null
    }

    let currentNode = node
    while (currentNode.left) {
      currentNode = currentNode.left
    }

    return currentNode
  }

  // O(h), where h is the height of the tree
  max(node = this.root) {
    if (!node) {
      return null
    }

    let currentNode = node
    while (currentNode.right) {
      currentNode = currentNode.right
    }

    return currentNode
  }
}
