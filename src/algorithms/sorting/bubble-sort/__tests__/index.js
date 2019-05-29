import {bubbleSort, bubbleSortOptimized} from '../index'

const isSorted = array => {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false
    }
  }

  return true
}

const fns = [
  {fn: bubbleSort, name: 'bubble sort 1'},
  {fn: bubbleSortOptimized, nme: 'bubble sort optimized'},
]

fns.forEach(({fn, name}) => {
  describe(`${name}`, () => {
    test('sort array in descending order', () => {
      const size = 1000
      const values = Array(size).map((value, index) => size - index)

      fn(values)

      expect(isSorted(values)).toBe(true)
    })
  })
})
