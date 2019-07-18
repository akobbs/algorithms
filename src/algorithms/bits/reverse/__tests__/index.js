import {reverse1, reverse2, reverse3} from '..'

const fns = [
  {
    fn: reverse1,
    name: 'swap bits from tail and head',
  },
  {
    fn: reverse2,
    name: 'record bits one-by-one',
  },
  {
    fn: reverse3,
    name: 'lookup table',
  },
]

function toDecimal(binaryStr) {
  return parseInt(binaryStr, 2) >> 0
}

function toBinary(value) {
  return (value >>> 0).toString(2)
}

fns.forEach(({fn: reverse, name}) => {
  describe(`Reverse bits: ${name}`, () => {
    test('reversing', () => {
      expect(reverse(0b1)).toBe(-Math.pow(2, 31))
      expect(reverse(0b11)).toBe(-Math.pow(2, 31) + Math.pow(2, 30))
      expect(reverse(0b10101010101010101010101010101010)).toBe(
        0b01010101010101010101010101010101,
      )
      expect(reverse(0b0)).toBe(0)
    })
  })
})
