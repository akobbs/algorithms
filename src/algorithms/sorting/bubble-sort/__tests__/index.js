import {bubbleSort1, bubbleSort2} from '../index'

const isSorted = array => {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false
    }
  }

  return true
}

const fns = [
  {fn: bubbleSort1, name: 'bubble sort 1'},
  {fn: bubbleSort2, name: 'bubble sort 2'},
]

fns.forEach(({fn, name}) => {
  describe(`${name}`, () => {
    test('sort for array in descending order', () => {
      const size = 1000
      const values = Array(size)
        .fill(0)
        .map((value, index) => size - index)

      fn(values)

      expect(isSorted(values)).toBe(true)
    })
  })
})
