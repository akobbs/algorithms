// Libs
import _ from 'lodash'

import IterativeBST from '../IterativeBST'
import RecursiveBST from '../RecursiveBST'

const createValueForKey = key => key * 10

const generateValues = size => {
  return Array(size)
    .fill(0)
    .map((value, index) => index)
}

const isSorted = array => {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false
    }
  }

  return true
}

const runTests = bstCreator => {
  test('put', () => {
    const tree = bstCreator()
    const values = Array(100)
      .fill(0)
      .map((value, index) => index)

    const shuffledValues = _.shuffle(values)
    shuffledValues.forEach(value => tree.put(value, createValueForKey(value)))

    const actualValues = []
    tree.inOrderTraverse(item => {
      actualValues.push(item)
    })

    expect(actualValues.length).toBe(values.length)
    expect(isSorted(actualValues)).toBe(true)

    const sortedActualValues = [...actualValues].sort((a, b) => a.key - b.key)
    expect(sortedActualValues).toEqual(
      values.map(value => ({key: value, value: createValueForKey(value)})),
    )
  })

  test('get', () => {
    const tree = bstCreator()
    const values = Array(100)
      .fill(0)
      .map((value, index) => index)

    const shuffledValues = _.shuffle(values)
    shuffledValues.forEach(value => tree.put(value, createValueForKey(value)))

    _.shuffle(values).forEach(value => {
      expect(tree.get(value)).toBe(createValueForKey(value))
    })
  })

  test('min', () => {
    const tree = bstCreator()

    const values = generateValues(300)
    values.forEach(key => tree.put(key, createValueForKey(key)))

    const expectedKey = 0
    expect(tree.min()).toEqual({
      key: expectedKey,
      value: createValueForKey(expectedKey),
    })

    const valuesToPut = [-1, -10, -30, -50, -100, -1000]

    valuesToPut.forEach(value => {
      tree.put(value, createValueForKey(value))
      expect(tree.min()).toEqual({
        key: value,
        value: createValueForKey(value),
      })
    })
  })

  test('max', () => {
    const tree = bstCreator()

    const values = generateValues(300)
    values.forEach(key => tree.put(key, createValueForKey(key)))

    const expectedKey = 299
    expect(tree.max()).toEqual({
      key: expectedKey,
      value: createValueForKey(expectedKey),
    })

    const valuesToPut = [1000, 1001, 1002, 1100, 2000, 90000]

    valuesToPut.forEach(value => {
      tree.put(value, createValueForKey(value))
      expect(tree.max()).toEqual({
        key: value,
        value: createValueForKey(value),
      })
    })
  })
}

describe('Iterative BST', () => {
  runTests(() => new IterativeBST())
})

describe('Recursive BST', () => {
  runTests(() => new RecursiveBST())
})
