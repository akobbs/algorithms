class Node {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

// Add find
// Insert after / before
export default class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
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

  addFirst(item) {
    const newNode = new Node(item)
    newNode.next = this.head
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
      this.tail = newNode
    }

    this.length++
  }

  remove(item) {
    if (!this.head) {
      return false
    }

    if (this.head.value === item) {
      if (this.head === this.tail) {
        this.tail = null
        this.head = null
      } else {
        this.head = this.head.next
      }

      return true
    }

    let currentNode = this.head
    while (currentNode.next) {
      if (currentNode.next.value === item) {
        if (currentNode.next === this.tail) {
          this.tail = currentNode
        }

        currentNode.next = currentNode.next.next

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
}
