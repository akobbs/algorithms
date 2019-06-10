export default class MaxHeap {
  constructor(array = []) {
    this.container = array
    this.buildMaxHeap()
  }

  // O(n) time
  buildMaxHeap() {
    const n = this.size()
    const firstParentIdx = MaxHeap.getParentIndex(n - 1)

    for (let i = firstParentIdx; i >= 0; i--) {
      this.sink(i)
    }
  }

  static getParentIndex(childIdx) {
    return Math.floor((childIdx - 1) / 2)
  }

  static getLeftChildIndex(parentIdx) {
    return 2 * parentIdx + 1
  }

  static getRightChildIndex(parentIdx) {
    return 2 * parentIdx + 2
  }

  size() {
    return this.container.length
  }

  hasRightChild(parentIdx) {
    return MaxHeap.getRightChildIndex(parentIdx) < this.size()
  }

  parent(childIdx) {
    return this.container[MaxHeap.getParentIndex(childIdx)]
  }

  leftChild(parentIdx) {
    return this.container[MaxHeap.getLeftChildIndex(parentIdx)]
  }

  rightChild(parentIdx) {
    return this.container[MaxHeap.getRightChildIndex(parentIdx)]
  }

  // O(1) time
  max() {
    if (this.size() < 1) {
      return null
    }

    return this.container[this.container.length - 1]
  }

  // O(log n) time
  deleteMax() {
    if (this.size() < 1) {
      throw new Error('underflow')
    }

    const max = this.container.pop()

    if (this.size() > 0) {
      this.swap(0, this.size() - 1)
      this.sink(0)
    }

    return max
  }

  // O(log n) time
  insert(key) {
    this.container.push(key)
    this.swim(this.size() - 1)
  }

  // O(log n) time
  swim(idx) {
    let currentIdx = idx
    let parentIdx = MaxHeap.getParentIndex(currentIdx)

    while (
      currentIdx > 0 &&
      this.container[currentIdx] > this.container[parentIdx]
    ) {
      this.swap(currentIdx, parentIdx)

      currentIdx = parentIdx
      parentIdx = MaxHeap.getParentIndex(currentIdx)
    }
  }

  // O(log n) time
  sink(idx) {
    const n = this.size()

    let leftIdx = MaxHeap.getLeftChildIndex(idx)
    let currentIdx = idx

    while (leftIdx < n) {
      let idxToSwap = leftIdx

      const rightIdx = MaxHeap.getRightChildIndex(currentIdx)
      if (
        this.hasRightChild(currentIdx) &&
        this.container[leftIdx] < this.container[rightIdx]
      ) {
        idxToSwap = rightIdx
      }

      if (this.container[currentIdx] < this.container[idxToSwap]) {
        this.swap(currentIdx, idxToSwap)
      } else {
        break
      }

      currentIdx = idxToSwap
      leftIdx = MaxHeap.getLeftChildIndex(currentIdx)
    }
  }

  swap(oneIdx, twoIdx) {
    const temp = this.container[oneIdx]
    this.container[oneIdx] = this.container[twoIdx]
    this.container[twoIdx] = temp
  }
}
