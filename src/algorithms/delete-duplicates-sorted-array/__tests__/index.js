import deleteDuplicates from '..'

describe('Delete duplicates from a sorted array', () => {
  test('1', () => {
    const sortedArr = [2, 3, 5, 5, 7, 11, 11, 11, 13]
    const validElementsCount = deleteDuplicates(sortedArr)

    expect(validElementsCount).toBe(6)
    expect(sortedArr).toEqual([2, 3, 5, 7, 11, 13])
  })
})
