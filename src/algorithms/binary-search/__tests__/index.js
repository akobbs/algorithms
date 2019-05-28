import {binarySearchIterative, binarySearchRecursive} from '../index'

const fns = [
  {
    fn: binarySearchIterative,
    name: 'binary serch iterative',
  },
  {
    fn: binarySearchRecursive,
    name: 'binary search recursive',
  },
]

fns.forEach(({fn, name}) => {
  describe(`${name}`, () => {
    test('search index', () => {
      const values = Array(100).map((value, index) => index)

      values.forEach(value => {
        const resultIndex = fn(values, value)
        expect(resultIndex).toBe(values.indexOf(value))
      })
    })

    test('search for not existing value', () => {
      const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      const notExistingValues = [15, 20, 40, 100, 53, 12]

      notExistingValues.forEach(value => {
        const resultIndex = fn(values, value)
        expect(resultIndex).toBe(-1)
      })
    })
  })
})
