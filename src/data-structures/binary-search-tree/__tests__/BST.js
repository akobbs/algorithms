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

  test('get for not existing key', () => {
    const tree = bstCreator()
    const values = Array(100)
      .fill(0)
      .map((value, index) => index)

    const shuffledValues = _.shuffle(values)
    shuffledValues.forEach(value => tree.put(value, createValueForKey(value)))

    const notExistingKeys = [200, 300, 404, 201, 500, 593]
    notExistingKeys.forEach(key => {
      expect(tree.get(key)).toBeNull()
    })
  })

  test('min', () => {
    const tree = bstCreator()

    const values = _.shuffle(generateValues(300))
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

    const values = _.shuffle(generateValues(300))
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

  test('removeMin', () => {
    const tree = bstCreator()

    const values = _.shuffle(generateValues(300))
    values.forEach(value => tree.put(value, value))

    const sortedValues = [...values].sort((a, b) => a - b)
    sortedValues.forEach(value => {
      expect(tree.get(value)).toBe(value)
      tree.removeMin()
      expect(tree.get(value)).toBeNull()
    })

    expect(tree.toArray()).toEqual([])
  })

  test('removeMin for an empty tree', () => {
    const tree = bstCreator()
    tree.removeMin()
  })

  test('remove', () => {
    const tree = bstCreator()

    const values = _.shuffle(generateValues(300))
    values.forEach(value => tree.put(value, value))

    _.shuffle(values).forEach(value => {
      expect(tree.get(value)).toBe(value)
      tree.remove(value)
      expect(tree.get(value)).toBeNull()
    })

    expect(tree.toArray()).toEqual([])
  })

  test('remove root node with two child', () => {
    const tree = bstCreator()
    tree.put(2, 2)
    tree.put(1, 1)
    tree.put(3, 3)

    const toRemove = [2, 3, 1]
    toRemove.forEach(key => {
      expect(tree.get(key)).toBe(key)
      tree.remove(key)
      expect(tree.get(key)).toBeNull()
    })
  })

  test('remove 1', () => {
    const tree = bstCreator()
    tree.put(10, 10)
    tree.put(5, 5)
    tree.put(15, 15)
    tree.put(4, 4)

    const toRemove = [15]
    toRemove.forEach(key => {
      expect(tree.get(key)).toBe(key)
      tree.remove(key)
      expect(tree.get(key)).toBeNull()
    })
  })

  test('remove key from the bst of size 1', () => {
    const tree = bstCreator()
    tree.put(1, 10)
    tree.remove(1)

    expect(tree.toArray()).toEqual([])
  })

  test('remove not existing keys', () => {})
}

describe('Iterative BST', () => {
  runTests(() => new IterativeBST())
})

describe('Recursive BST', () => {
  runTests(() => new RecursiveBST())
})
