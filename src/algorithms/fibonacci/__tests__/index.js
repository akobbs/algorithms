import {getNthFibonacci1, getNthFibanacci2, getNthFibonacci3} from '../index'

const fibSequence = [
  0,
  1,
  1,
  2,
  3,
  5,
  8,
  13,
  21,
  34,
  55,
  89,
  144,
  233,
  377,
  610,
  987,
  1597,
  2584,
  4181,
  6765,
  10946,
  17711,
  28657,
  46368,
  75025,
  121393,
  196418,
  317811,
]

const runTests = fn => {
  test('fib', () => {
    fibSequence.forEach((value, index) => {
      const result = fn(index + 1)
      expect(result).toBe(value)
    })
  })
}

const fns = [
  {fn: getNthFibonacci1, name: 'recursive'},
  {fn: getNthFibanacci2, name: 'recursive with memoization'},
  {fn: getNthFibonacci3, name: 'iterative'},
]

fns.forEach(({name, fn}) =>
  describe(`Fibonacci: ${name}`, () => {
    runTests(fn)
  }),
)
