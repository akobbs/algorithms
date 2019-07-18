import {countOneBits1, countOneBits2} from '..'

const fns = [
  {
    fn: countOneBits1,
    name: 'naive solution',
  },
  {
    fn: countOneBits2,
    name: 'optimized solution',
  },
]

fns.forEach(({fn: countOneBits, name}) => {
  describe(`Count 1 bits: ${name}`, () => {
    test('positive numbers', () => {
      // 0000
      expect(countOneBits(0)).toBe(0)
      // 0001
      expect(countOneBits(1)).toBe(1)
      // 0011
      expect(countOneBits(3)).toBe(2)
      // 0111
      expect(countOneBits(7)).toBe(3)
      // 1111
      expect(countOneBits(15)).toBe(4)
    })

    test('negative numbers', () => {
      // 11111111 11111111 11111111 11111111 (32 bits)
      expect(countOneBits(-1)).toBe(32)
    })
  })
})
