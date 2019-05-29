import {findThreeLargestNumbers} from '../index'

describe('find 3 largest numbers', () => {
  test('test 1', () => {
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const result = findThreeLargestNumbers(values)
    console.log(result)
    expect(result).toEqual([7, 8, 9])
  })
})
