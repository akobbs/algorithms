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
    if (node) {
      this.inOrderTraverse(node.left)
      callback({key: node.key, value: node.value})
      this.inOrderTraverse(node.right)
    }
  }

  // O(h), where h is the height of the tree
  get(key, node = this.root) {
    if (!node || node.key === key) {
      return node.value
    }

    if (key < node.key) {
      return this.get(key, node.left)
    } else {
      return this.get(key, node.right)
    }
  }

  // O(h), where h is the height of the tree
  min(node = this.root) {
    if (node.left) {
      return this.min(node.left)
    }

    return {key: node.key, value: node.value}
  }

  // O(h), where h is the height of the tree
  max(node = this.root) {
    if (node.right) {
      return this.max(node.right)
    }

    return {key: node.key, value: node.value}
  }
}
