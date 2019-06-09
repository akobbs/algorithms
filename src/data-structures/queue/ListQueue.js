class Node {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

export default class Queue {
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

  // O(1)
  enqueue(item) {
    const oldTail = this.tail
    this.tail = new Node(item)

    if (this.isEmpty()) {
      this.head = this.tail
    } else {
      oldTail.next = this.tail
    }

    this.length++
  }

  // O(1)
  dequeue() {
    if (this.isEmpty()) {
      throw new Error('underflow')
    }

    const item = this.head.value

    this.head = this.head.next
    if (this.isEmpty()) {
      this.tail = null
    }

    this.length--

    return item
  }
}
