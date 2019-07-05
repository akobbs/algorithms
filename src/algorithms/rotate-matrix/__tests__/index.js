import {rotateMatrix} from '..'

describe('Rotate matrix', () => {
  test('1', () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ]

    expect(rotateMatrix(matrix)).toBe(true)
    expect(matrix).toEqual([
      [13, 9, 5, 1],
      [14, 10, 6, 2],
      [15, 11, 7, 3],
      [16, 12, 8, 4],
    ])
  })

  test('2', () => {
    const matrix = [[1, 2], [3, 4]]
    expect(rotateMatrix(matrix)).toBe(true)
    expect(matrix).toEqual([[3, 1], [4, 2]])
  })
})
