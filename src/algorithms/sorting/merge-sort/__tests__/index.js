import {mergeSort1, mergeSort2, merge1, merge2, merge3} from '..'

const isSorted = array => {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false
    }
  }

  return true
}

const fns = [
  {fn: mergeSort1, name: 'merge sort 1'},
  {fn: mergeSort2, name: 'merge sort 2'},
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

// describe('Merge two sorted arrays', () => {
//     const firstArr = [1, 5, 10, 15, 20, 25, 30]
//     const secondArr = [23, 29, 40, 46, 99]

//     expect(merge1(firstArr, secondArr)).
// })
