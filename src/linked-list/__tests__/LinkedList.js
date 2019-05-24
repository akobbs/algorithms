// Libs
import _ from 'lodash'

// Lists
import LinkedList from '../LinkedList'
import DoublyLinkedList from '../DoublyLinkedList'

const createArrayWithValues = numberOfValues =>
  Array(numberOfValues)
    .fill(0)
    .map((value, index) => index)

const runTests = listCreator => {
  test('addFirst', () => {
    const list = listCreator()
    const numberOfValues = 100
    const values = createArrayWithValues(numberOfValues)

    values.forEach(value => list.addFirst(value))

    const actual = list.toArray()
    const reversedValues = [...values].reverse()
    expect(actual).toEqual(reversedValues)
  })

  test('addLast', () => {
    const list = listCreator()
    const numberOfValues = 100
    const values = createArrayWithValues(numberOfValues)

    values.forEach(value => list.addLast(value))

    const actual = list.toArray()
    expect(actual).toEqual(values)
  })

  test('removeFirst', () => {
    const list = listCreator()
    const numberOfValues = 100
    const values = createArrayWithValues(numberOfValues)

    values.forEach(value => list.addLast(value))

    values.forEach(() => {
      const removed = list.removeFirst()
      const expectedRemoved = values.shift()
      expect(removed).toEqual(expectedRemoved)
      expect(list.toArray()).toEqual(values)
    })
  })

  test('removeFirst for the empty list', () => {
    const list = listCreator()

    expect(() => list.removeFirst()).toThrow(Error)

    list.addFirst(1)
    list.removeFirst()

    expect(() => list.removeFirst()).toThrow(Error)
  })

  test('removeLast', () => {
    const list = listCreator()
    const numberOfValues = 100
    const values = createArrayWithValues(numberOfValues)

    values.forEach(value => list.addLast(value))

    values.forEach(() => {
      const removed = list.removeLast()
      const expectedRemoved = values.pop()
      expect(removed).toEqual(expectedRemoved)
      expect(list.toArray()).toEqual(values)
    })
  })

  test('removeLast for the empty list', () => {
    const list = listCreator()

    expect(() => list.removeLast()).toThrow(Error)

    list.addFirst(1)
    list.removeLast()

    expect(() => list.removeLast()).toThrow(Error)
  })

  test('remove first item', () => {
    const list = listCreator()
    const valuesToAdd = [1, 2, 3]

    valuesToAdd.forEach(value => list.addLast(value))

    const isRemoved = list.remove(1)
    expect(isRemoved).toBe(true)
    expect(list.toArray()).toEqual([2, 3])
  })

  test('remove last item', () => {
    const list = listCreator()
    const valuesToAdd = [1, 2, 3]

    valuesToAdd.forEach(value => list.addLast(value))

    const isRemoved = list.remove(3)
    expect(isRemoved).toBe(true)
    expect(list.toArray()).toEqual([1, 2])
  })

  test('remove', () => {
    const list = listCreator()
    const numberOfValues = 20
    const values = createArrayWithValues(numberOfValues)

    values.forEach(value => list.addLast(value))

    const shuffledValues = _.shuffle(values)
    shuffledValues.forEach(value => {
      const isRemoved = list.remove(value)
      expect(isRemoved).toBe(true)
    })

    expect(list.toArray()).toEqual([])
  })

  test('remove not existing item', () => {
    const list = listCreator()
    const valuesToAdd = [1, 2, 3, 4, 5]
    const notExistingValues = [0, 10, 11, 12, 13, 14]

    valuesToAdd.forEach(value => list.addLast(value))

    notExistingValues.forEach(value => {
      const isRemoved = list.remove(value)
      expect(isRemoved).toBe(false)
    })
  })

  test('mixed operations', () => {
    const list = listCreator()

    for (let i = 0; i < 1000; i++) {
      const randomIndex = _.random(0, operations.length - 1)
      operations[randomIndex](list)
    }
  })
}

const removeAndCheck = list => {
  const values = list.toArray()
  const randomIndex = _.random(0, values.length - 1)
  const randomValue = values[randomIndex]

  const isRemoved = list.remove(randomValue)

  const valueIndex = values.indexOf(randomValue)
  if (valueIndex === -1) {
    expect(isRemoved).toBe(false)
  } else {
    const expected = [...values]
    expected.splice(valueIndex, 1)

    expect(isRemoved).toBe(true)
    expect(list.toArray()).toEqual(expected)
  }
}

const removeFirstAndCheck = list => {
  const values = list.toArray()

  if (values.length === 0) {
    expect(() => list.removeFirst()).toThrow(Error)
  } else {
    const removed = list.removeFirst()
    const expected = [...values]
    const expectedRemoved = expected.shift()

    expect(removed).toEqual(expectedRemoved)
    expect(list.toArray()).toEqual(expected)
  }
}

const removeLastAndCheck = list => {
  const values = list.toArray()

  if (values.length === 0) {
    expect(() => list.removeLast()).toThrow(Error)
  } else {
    const removed = list.removeLast()
    const expected = [...values]
    const expectedRemoved = expected.pop()

    expect(removed).toEqual(expectedRemoved)
    expect(list.toArray()).toEqual(expected)
  }
}

const addFirstAndCheck = list => {
  const values = list.toArray()
  const randomValue = _.random(0, 10000)

  list.addFirst(randomValue)
  expect(list.toArray()).toEqual([randomValue, ...values])
}

const addLastAndCheck = list => {
  const values = list.toArray()
  const randomValue = _.random(0, 10000)

  list.addLast(randomValue)
  expect(list.toArray()).toEqual([...values, randomValue])
}

describe('LinkedList', () => {
  runTests(() => new LinkedList())
})

describe('DoublyLinkedList', () => {
  runTests(() => new DoublyLinkedList())

  test('removeNode head', () => {
    const list = new DoublyLinkedList()
    const valuesToAdd = [1, 2, 3, 4]

    valuesToAdd.forEach(value => list.addLast(value))

    const node = list.getNode(1)
    list.removeNode(node)

    expect(list.toArray()).toEqual([2, 3, 4])
  })

  test('removeNode tail', () => {
    const list = new DoublyLinkedList()
    const valuesToAdd = [1, 2, 3, 4]

    valuesToAdd.forEach(value => list.addLast(value))

    const node = list.getNode(4)
    list.removeNode(node)

    expect(list.toArray()).toEqual([1, 2, 3])
  })

  test('removeNode', () => {
    const list = new DoublyLinkedList()
    const numberOfValues = 100
    const values = createArrayWithValues(numberOfValues)

    values.forEach(value => list.addLast(value))

    const shuffledValues = _.shuffle(values)
    shuffledValues.forEach(value => {
      const beforeValues = list.toArray()

      const node = list.getNode(value)
      list.removeNode(node)

      const valueIndex = beforeValues.indexOf(value)
      const expectedValues = [...beforeValues]
      expectedValues.splice(valueIndex, 1)

      expect(list.toArray()).toEqual(expectedValues)
    })

    expect(list.toArray()).toEqual([])
  })
})

const operations = [
  removeAndCheck,
  removeFirstAndCheck,
  removeLastAndCheck,
  addFirstAndCheck,
  addLastAndCheck,
]
