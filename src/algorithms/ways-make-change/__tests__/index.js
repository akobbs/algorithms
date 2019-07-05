import {
  getNumberOfWaysToMakeChange1,
  getNumberOfWaysToMakeChange2,
  getNumberOfWaysToMakeChange3,
  getNumberOfWaysToMakeChange4,
} from '..'

const fns = [
  {
    fn: getNumberOfWaysToMakeChange1,
    name: 'recursive',
  },
  {
    fn: getNumberOfWaysToMakeChange2,
    name: 'recursive with memoization',
  },
  {
    fn: getNumberOfWaysToMakeChange3,
    name: 'dynamic programming with 2d array',
  },
  {
    fn: getNumberOfWaysToMakeChange4,
    name: 'dynamic programming with array',
  },
]

fns.forEach(({fn, name}) => {
  describe(`Number of ways to make change: ${name}`, () => {
    test('1', () => {
      expect(fn(5, [1, 2, 5])).toBe(4)
    })
  })
  describe(`Number of ways to make change: ${name}`, () => {
    test('2', () => {
      expect(fn(15, [1, 2, 5])).toBe(18)
    })
  })
})
