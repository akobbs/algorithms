import {maxSubarraySum1, maxSubarraySum2} from '..'

const fns = [
  {
    fn: maxSubarraySum1,
    name: '1',
  },
  {
    fn: maxSubarraySum2,
    name: '2',
  },
]

fns.forEach(({fn, name}) => {
  test(`Max subarray sum: ${name}`, () => {
    expect(fn([-2, -3, 4, -1, -2, 1, 5, -3])).toEqual(7)
  })
})
