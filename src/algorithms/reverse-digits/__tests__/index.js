import reverse from '..'

describe('Reverse digits', () => {
  test('positive numbers', () => {
    expect(reverse(0)).toBe(0)
    expect(reverse(1)).toBe(1)
    expect(reverse(7)).toBe(7)

    expect(reverse(13)).toBe(31)
    expect(reverse(91)).toBe(19)

    expect(reverse(123456789)).toBe(987654321)
  })

  test('negative numbers', () => {
    expect(reverse(-1)).toBe(-1)
    expect(reverse(-7)).toBe(-7)

    expect(reverse(-13)).toBe(-31)
    expect(reverse(-91)).toBe(-19)

    expect(reverse(-123456789)).toBe(-987654321)
  })
})
