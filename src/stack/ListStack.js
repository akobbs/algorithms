// Add iterator
// Add peek function

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

  push(item) {
    const nodeToAdd = new Node(item)
    const oldHead = this.head

    this.head = nodeToAdd
    nodeToAdd.next = oldHead

    this.length++
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('underflow')
    }

    const item = this.head.value
    this.head = this.head.next
    this.length--

    return item
  }
}
