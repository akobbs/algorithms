import {
  twoNumberSum1,
  twoNumberSum2,
  twoNumberSum3,
  twoNumberSum4,
} from '../index'

const runTests = fn => {
  test('empty array', () => {
    expect(fn([], 10)).toEqual([])
  })

  test('array of length 1', () => {
    expect(fn([1], 1)).toEqual([])
  })

  test('sum where first = second', () => {
    expect(fn([4, 4], 8)).toEqual([4, 4])
    expect(fn([4, 2, 4, 10, 1, 3], 8)).toEqual([4, 4])
    expect(fn([4, 2, -4, 10, 1, 3, -4], -8)).toEqual([-4, -4])
  })

  test('no such values', () => {
    expect(fn([10, 9, -1, 1, 2, 3, 4, 5, 7], 22)).toEqual([])
  })

  test('such pair exists', () => {
    const result1 = fn([4, 7, 3, 2, 0, 2, -1, 4], 9)
    expect(result1).toContain(7)
    expect(result1).toContain(2)

    // [4, 7] or [7, 4]
    const result2 = fn([4, 7, 3, 2, 0, 2, -1, 4], 11)
    expect(result2).toContain(4)
    expect(result2).toContain(7)
  })
}

const fns = [twoNumberSum1, twoNumberSum2, twoNumberSum3, twoNumberSum4]

fns.forEach((fn, index) =>
  describe(`two sum implementation: ${index}`, () => {
    runTests(fn)
  }),
)
