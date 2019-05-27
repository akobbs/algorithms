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
      this.inOrderTraverse(callback, node.left)
      callback({key: node.key, value: node.value})
      this.inOrderTraverse(callback, node.right)
    }
  }

  put(key, value) {
    this.root = this.putNode(key, value, this.root)
  }

  // O(h), where h is the height of the tree
  putNode(key, value, node = this.root) {
    if (!node) {
      return new Node(key, value)
    }

    if (key < node.key) {
      node.left = this.putNode(key, value, node.left)
    } else if (key > node.key) {
      node.right = this.putNode(key, value, node.right)
    } else {
      node.value = value
    }

    return node
  }

  // O(h), where h is the height of the tree
  get(key, node = this.root) {
    if (!node) {
      return null
    }

    if (node.key === key) {
      return node.value
    }

    if (key < node.key) {
      return this.get(key, node.left)
    } else {
      return this.get(key, node.right)
    }
  }

  remove(key) {
    this.root = this.removeNode(key, this.root)
  }

  removeNode(key, node = this.root) {
    if (!node) {
      return null
    }

    if (key < node.key) {
      node.left = this.removeNode(key, node.left)
    } else if (key > node.key) {
      node.right = this.removeNode(key, node.right)
    } else {
      if (!node.left) {
        return node.right
      }

      if (!node.right) {
        return node.left
      }

      const minItem = this.min(node.right)
      node.key = minItem.key
      node.value = minItem.value

      node.right = this.removeMinNode(node.right)
    }

    return node
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

  removeMin() {
    this.root = this.removeMinNode(this.root)
  }

  removeMinNode(node = this.root) {
    if (!node) {
      return null
    }

    if (!node.left) {
      return node.right
    }

    node.left = this.removeMinNode(node.left)
    return node
  }

  toArray() {
    const values = []
    this.inOrderTraverse(value => values.push(value))
    return values
  }
}
