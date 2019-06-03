// Libs
import _ from 'lodash'

import Heap from '../index'

// Iterative
function isValidHeap(array) {
  const lastParentIdx = Heap.getParentIndex(array.length - 1)

  for (let i = 0; i <= lastParentIdx; i++) {
    const leftIdx = Heap.getLeftChildIndex(i)
    const rightIdx = Heap.getRightChildIndex(i)

    if (array[i] < array[leftIdx || array[i] < array[rightIdx]]) {
      return false
    }
  }

  return true
}

// Recursive
function isValidHeap1(array, idx = 0) {
  if (idx > Heap.getParentIndex(array.length - 1)) {
    return true
  }

  const leftIdx = Heap.getLeftChildIndex(idx)
  const rightIdx = Heap.getRightChildIndex(idx)

  if (array[idx] < array[leftIdx] || array[idx] < array[rightIdx]) {
    return false
  }

  return isValidHeap(array, leftIdx) && isValidHeap(array, rightIdx)
}

describe('Heap', () => {
  test('create heap from array', () => {
    const values = Array(50).map((value, index) => index + 3)
    const shuffledValues = _.shuffle(values)

    const heap = new Heap([...shuffledValues])

    expect(isValidHeap(heap.container)).toBe(true)
  })

  test('deleteMax', () => {
    const values = Array(50).map((value, index) => index + 3)
    const shuffledValues = _.shuffle(values)

    const heap = new Heap([...shuffledValues])

    const sorted = [...values]

    for (let i = 0; i < values.length; i++) {
      const deleted = heap.deleteMax()
      const expected = sorted.pop()

      expect(deleted).toEqual(expected)
      expect(heap.size()).toBe(values.length - i - 1)
    }
  })

  test('insert', () => {
    const values = Array(50).map((value, index) => index + 3)
    const shuffledValues = _.shuffle(values)

    const heap = new Heap()
    shuffledValues.forEach(value => {
      heap.insert(value)
    })

    expect(heap.size()).toBe(shuffledValues.length)
    expect(isValidHeap(heap.container)).toBe(true)
  })
})
