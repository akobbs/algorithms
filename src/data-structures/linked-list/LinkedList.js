class Node {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

export default class LinkedList {
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

  // O(1) time
  peekFirst() {
    return this.head ? this.head.value : null
  }

  // O(1) time
  peekLast() {
    return this.tail ? this.tail.value : null
  }

  // O(1) time
  getFirst() {
    if (this.isEmpty()) {
      throw new Error('The list is empty')
    }

    return this.head.value
  }

  // O(1) time
  getLast() {
    if (this.isEmpty()) {
      throw new Error('The list is empty')
    }

    return this.tail.value
  }

  // O(1) time
  addFirst(item) {
    const newNode = new Node(item)
    newNode.next = this.head
    this.head = newNode

    if (!this.tail) {
      this.tail = this.head
    }

    this.length++
  }

  // O(1) time
  addLast(item) {
    const newNode = new Node(item)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      const oldTail = this.tail
      oldTail.next = newNode
      this.tail = newNode
    }

    this.length++
  }

  // O(n) time, as we have to find item in the list first
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

        this.length--
        return true
      }

      currentNode = currentNode.next
    }

    return false
  }

  // O(1) time
  removeFirst() {
    if (this.isEmpty()) {
      throw new Error('The list is empty')
    }

    const removedValue = this.head.value
    this.head = this.head.next

    if (!this.head) {
      this.tail = null
    }

    this.length--

    return removedValue
  }

  // O(n) time, as we have to find node before the last node
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
