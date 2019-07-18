import subtractOne from '..'

describe('Subtract one', () => {
  test('positive numbers', () => {
    expect(subtractOne(1)).toBe(0)
    expect(subtractOne(2)).toBe(1)
    expect(subtractOne(3)).toBe(2)
    expect(subtractOne(123)).toBe(122)
  })

  test('negative numbers', () => {
    expect(subtractOne(-1)).toBe(-2)
    expect(subtractOne(-2)).toBe(-3)
    expect(subtractOne(0)).toBe(-1)
  })
})
