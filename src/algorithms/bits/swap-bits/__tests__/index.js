import {swapBits1, swapBits2} from '..'

const fns = [
  {
    fn: swapBits1,
    name: '1',
  },
  {
    fn: swapBits2,
    name: '2',
  },
]

fns.forEach(({fn: swapBits, name}) => {
  describe(`Swap bits i and j: ${name}`, () => {
    test('positive numbers', () => {
      // input:  01000000000000000000000000000000
      // output: 00000000000000000000000000000001
      expect(swapBits(1073741824, 30, 0)).toBe(1)

      // input:  00000000000000000000000000000001
      // output: 01000000000000000000000000000000
      expect(swapBits(1, 0, 30)).toBe(1073741824)

      // input:  0001
      // output: 0010
      expect(swapBits(1, 1, 0)).toBe(2)
    })
  })
})
