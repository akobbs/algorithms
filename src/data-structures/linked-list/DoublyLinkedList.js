class Node {
  constructor(value, next = null, prev = null) {
    this.value = value
    this.next = next
    this.prev = prev
  }
}

export default class DoublyLinkedList {
  constructor(equals = (a, b) => a === b) {
    this.head = null
    this.tail = null
    this.length = 0
    this.equals = equals
  }

  isEmpty() {
    return this.head === null
  }

  size() {
    return this.length
  }

  peekFirst() {
    return this.head ? this.head.value : null
  }

  peekLast() {
    return this.tail ? this.tail.value : null
  }

  getFirst() {
    if (this.isEmpty()) {
      throw new Error('The list is empty')
    }

    return this.head.value
  }

  getLast() {
    if (this.isEmpty()) {
      throw new Error('The list is empty')
    }

    return this.tail.value
  }

  // Return node to the client is not safe.
  getNode(item) {
    let currentNode = this.head

    while (currentNode) {
      if (this.equals(currentNode.value, item)) {
        return currentNode
      }

      currentNode = currentNode.next
    }

    return null
  }

  removeNode(node) {
    if (node.prev) {
      node.prev.next = node.next
    } else {
      this.head = node.next
    }

    if (node.next) {
      node.next.prev = node.prev
    } else {
      this.tail = node.prev
    }
  }

  addFirst(item) {
    const newNode = new Node(item)
    newNode.next = this.head

    if (this.head) {
      this.head.prev = newNode
    }
    this.head = newNode

    if (!this.tail) {
      this.tail = this.head
    }

    this.length++
  }

  addLast(item) {
    const newNode = new Node(item)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      const oldTail = this.tail
      oldTail.next = newNode
      newNode.prev = oldTail
      this.tail = newNode
    }

    this.length++
  }

  remove(item) {
    if (!this.head) {
      return false
    }

    if (this.equals(this.head.value, item)) {
      if (this.head === this.tail) {
        this.tail = null
        this.head = null
      } else {
        this.head = this.head.next
        this.head.prev = null
      }

      this.length--
      return true
    }

    let currentNode = this.head
    while (currentNode.next) {
      if (this.equals(currentNode.next.value, item)) {
        if (currentNode.next === this.tail) {
          this.tail = currentNode
        }

        currentNode.next = currentNode.next.next

        if (currentNode.next) {
          currentNode.next.prev = currentNode
        }

        this.length--
        return true
      }

      currentNode = currentNode.next
    }

    return false
  }

  removeFirst() {
    if (this.isEmpty()) {
      throw new Error('The list is empty')
    }

    const removedValue = this.head.value
    this.head = this.head.next

    if (!this.head) {
      this.tail = null
    } else {
      this.head.prev = null
    }

    this.length--

    return removedValue
  }

  removeLast() {
    if (this.isEmpty()) {
      throw new Error('The list is empty')
    }

    const removedValue = this.tail.value

    if (this.head === this.tail) {
      this.head = null
      this.tail = null

      this.length--
      return removedValue
    }

    let currentNode = this.head
    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next
    }

    currentNode.next = null
    this.tail = currentNode

    this.length--

    return removedValue
  }

  toArray() {
    const values = []

    let currentNode = this.head
    while (currentNode) {
      values.push(currentNode.value)
      currentNode = currentNode.next
    }

    return values
  }

  toArrayFromTail() {
    const values = []

    let currentNode = this.tail
    while (currentNode) {
      values.unshift(currentNode.value)
      currentNode = currentNode.prev
    }

    return values
  }

  [Symbol.iterator]() {
    let currentNode = this.head

    return {
      next() {
        if (currentNode) {
          const value = currentNode.value
          currentNode = currentNode.next

          return {
            done: false,
            value,
          }
        } else {
          return {
            done: true,
          }
        }
      },
    }
  }
}
