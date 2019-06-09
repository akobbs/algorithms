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

  // Average case: O(1) time
  // Worst case: O(n) time
  enqueue(item) {
    this.items.push(item)
  }

  // O(n) time
  dequeue() {
    if (this.isEmpty()) {
      throw new Error('underflow')
    }

    return this.items.shift()
  }
}
