class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
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

  enqueue(item) {
    const oldTail = this.tail
    const nodeToAdd = new Node(item)

    if (this.isEmpty()) {
      this.head = nodeToAdd
      this.tail = nodeToAdd
    } else {
      oldTail.next = nodeToAdd
    }

    this.length++
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('underflow')
    }

    this.head = this.head.next
    if (this.isEmpty()) {
      this.tail = null
    }
    this.length--
  }
}

const q = new Queue()
q.enqueue(1)
q.enqueue(2)
