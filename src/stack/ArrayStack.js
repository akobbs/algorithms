// Add iterator
// Add peek function

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

  push(item) {
    this.items.push(item)
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('underflow')
    }

    return this.items.pop()
  }
}
