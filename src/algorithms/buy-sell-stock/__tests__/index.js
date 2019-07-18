import computeMaxProfit from '..'

describe('Buy and sell stock', () => {
  test('1', () => {
    const maxProfit = computeMaxProfit([
      310,
      315,
      275,
      295,
      260,
      270,
      290,
      230,
      255,
      250,
    ])

    expect(maxProfit).toBe(30)
  })
})
