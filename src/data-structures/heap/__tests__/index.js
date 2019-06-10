// Libs
import _ from 'lodash'

import Heap from '../index'
import {isMaxHeap1 as isMaxHeap} from '../../../algorithms/validate-heap'

describe('Heap', () => {
  test('create heap from array', () => {
    const values = Array(50).map((value, index) => index + 3)
    const shuffledValues = _.shuffle(values)

    const heap = new Heap([...shuffledValues])

    expect(isMaxHeap(heap.container)).toBe(true)
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
    expect(isMaxHeap(heap.container)).toBe(true)
  })
})
