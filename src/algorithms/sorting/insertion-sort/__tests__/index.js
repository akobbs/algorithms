import insetionSort from '../index'

const isSorted = array => {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false
    }
  }

  return true
}

describe('insertion sort', () => {
  test('sort for array in descending order', () => {
    const size = 1000
    const values = Array(size)
      .fill(0)
      .map((value, index) => size - index)

    insetionSort(values)

    expect(isSorted(values)).toBe(true)
  })
})
