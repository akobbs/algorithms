export default class Stack {
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
  push(item) {
    this.items.push(item)
  }

  // O(1) time
  pop() {
    if (this.isEmpty()) {
      throw new Error('underflow')
    }

    return this.items.pop()
  }

  // O(1) time
  peek() {
    if (this.isEmpty()) {
      throw new Error('underflow')
    }

    return this.items[this.size() - 1]
  }
}
