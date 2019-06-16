import {maxSubsetNoAdjacent1, maxSubsetNoAdjacent2} from '..'

const fns = [
  {
    fn: maxSubsetNoAdjacent1,
    name: '1',
  },
  {
    fn: maxSubsetNoAdjacent2,
    name: '2',
  },
]

fns.forEach(({fn, name}) => {
  describe(`Max subset with no adjacent elements: ${name}`, () => {
    test('1', () => {
      const maxSum = fn([1, 2, 3, 4, 5])
      expect(maxSum).toBe(9)
    })
    test('2', () => {
      const maxSum = fn([8, 15, 7, 10, 9])
      expect(maxSum).toBe(25)
    })
  })
})
