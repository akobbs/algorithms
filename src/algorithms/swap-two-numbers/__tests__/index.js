import {swap1, swap2, swap3} from '..'

const fns = [
  {
    fn: swap1,
    name: '1',
  },
  {
    fn: swap2,
    name: '2',
  },
  {
    fn: swap3,
    name: '3',
  },
]

fns.forEach(({fn: swap, name}) => {
  describe(`Swap two numbers: ${name}`, () => {
    test('', () => {
      expect(swap(1, 2)).toEqual({x: 2, y: 1})
      expect(swap(0, -1)).toEqual({x: -1, y: 0})
      expect(swap(256, 97)).toEqual({x: 97, y: 256})
    })
  })
})

// Doesn't give an expected result when overflow has a place while adding two big numbers
describe('Swap two numbers using arithmetic operations', () => {
  test('', () => {
    expect(swap2(Number.MAX_SAFE_INTEGER, 256)).not.toEqual({
      x: 256,
      y: Number.MAX_SAFE_INTEGER,
    })
  })
})
