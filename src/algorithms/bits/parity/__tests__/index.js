import {parity1, parity2, parity3} from '..'

const fns = [
  {
    fn: parity1,
    name: 'naive solution',
  },
  {
    fn: parity2,
    name: 'optimized solution',
  },
  {
    fn: parity3,
    name: 'lookup table solution',
  },
]

fns.forEach(({fn: parity, name}) => {
  describe(`Parity of the number: ${name}`, () => {
    test('parity', () => {
      // 0000
      expect(parity(0)).toBe(0)
      // 0001
      expect(parity(1)).toBe(1)
      // 0011
      expect(parity(3)).toBe(0)
      // 0111
      expect(parity(7)).toBe(1)
      // 1111
      expect(parity(15)).toBe(0)
      // 1000
      expect(parity(8)).toBe(1)
      // 1100
      expect(parity(12)).toBe(0)

      expect(parity(0b10001100)).toBe(1)
      expect(parity(0b11100111)).toBe(0)
      expect(parity(0xffff)).toBe(0)
    })
  })
})
