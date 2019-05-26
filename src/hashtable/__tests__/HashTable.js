// Libs
import _ from 'lodash'

import HashTable from '../HashTable'

const createArrayWithValues = numberOfValues =>
  Array(numberOfValues)
    .fill(0)
    .map((value, index) => index)

const createValueForKey = key => key * 10

// test size function
const runTests = tableCreator => {
  test('put / get', () => {
    const map = tableCreator()

    const keys = createArrayWithValues(1000)

    keys.forEach(key => map.put(key, key * 10))

    keys.forEach(key => {
      const value = map.get(key)
      expect(value).toBe(key * 10)
    })
  })

  test('put dublicated key', () => {
    const map = tableCreator()

    map.put(1, 10)
    map.put(2, 20)
    map.put(3, 30)
    map.put(4, 40)

    expect(map.get(3)).toBe(30)

    map.put(3, 60)
    expect(map.get(3)).toBe(60)
  })

  test('get with not existing key', () => {
    const map = tableCreator()

    map.put(1, 10)
    map.put(2, 20)
    map.put(3, 30)
    map.put(4, 40)

    expect(map.get(5)).toBeNull()
    expect(map.get(6)).toBeNull()
    expect(map.get(7)).toBeNull()
  })

  test('remove', () => {
    const map = tableCreator()
    const keys = createArrayWithValues(1000)

    keys.forEach(key => map.put(key, createValueForKey(key)))

    const shuffledKeys = _.shuffle(keys)
    shuffledKeys.forEach(key => {
      const value = map.get(key)
      expect(value).toBe(createValueForKey(key))

      const isRemoved = map.remove(key)
      expect(isRemoved).toBe(true)
      expect(map.get(key)).toBeNull()
    })
  })

  test('remove not existing key', () => {
    const map = tableCreator()
    const keys = createArrayWithValues(100)

    keys.forEach(key => map.put(key, createValueForKey(key)))

    const checkKeys = keys => {
      keys.forEach(key => {
        expect(map.get(key)).toBe(createValueForKey(key))
      })
    }

    const notExistingKeys = [200, 201, 202, 203, 204, 205, 206]

    notExistingKeys.forEach(key => {
      const isRemoved = map.remove(key)
      expect(isRemoved).toBe(false)

      checkKeys(keys)
    })
  })

  test('iterator', () => {
    const map = tableCreator()
    const keys = createArrayWithValues(1000)

    keys.forEach(key => map.put(key, createValueForKey(key)))

    const resultKeys = []
    for (let [key, value] of map) {
      resultKeys.push(key)
    }

    keys.forEach(key => {
      const keyIndex = resultKeys.indexOf(key)
      expect(keyIndex).not.toBe(-1)
    })
  })
}

describe('HashTable', () => {
  runTests((...args) => new HashTable(...args))
})
