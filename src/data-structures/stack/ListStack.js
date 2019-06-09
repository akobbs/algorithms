class Node {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

export default class Stack {
  constructor() {
    this.length = 0
    this.head = null
  }

  isEmpty() {
    return this.head === null
  }

  size() {
    return this.length
  }

  // O(1) time
  push(item) {
    const nodeToAdd = new Node(item)
    const oldHead = this.head

    this.head = nodeToAdd
    nodeToAdd.next = oldHead

    this.length++
  }

  // O(1) time
  pop() {
    if (this.isEmpty()) {
      throw new Error('underflow')
    }

    const item = this.head.value
    this.head = this.head.next
    this.length--

    return item
  }

  // O(1) time
  peek() {
    if (this.isEmpty()) {
      throw new Error('underflow')
    }

    return this.head.value
  }
}
