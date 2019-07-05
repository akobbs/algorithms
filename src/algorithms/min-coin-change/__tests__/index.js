import {minCoinChange1, minCoinChange2, minCoinChange3} from '..'

const fns = [
  {
    fn: minCoinChange1,
    name: 'dynamic programming',
  },
  {
    fn: minCoinChange2,
    name: 'recursive',
  },
  {
    fn: minCoinChange3,
    name: 'recursive with memoization',
  },
]

fns.forEach(({fn, name}) => {
  describe(`Min coin change: ${name}`, () => {
    test('1', () => {
      expect(fn(11, [1, 2, 5])).toBe(3)
    })
  })
})
