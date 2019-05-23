class Queue {
  constructor() {
    this.items = []
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }

  enqueue(item) {
    this.items.push(item)
  }

  dequeue() {
    return this.items.shift()
  }
}
