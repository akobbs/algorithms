export default class Queue {
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
    if (this.isEmpty()) {
      throw new Error('underflow')
    }

    return this.items.shift()
  }
}
