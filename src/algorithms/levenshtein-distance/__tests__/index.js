import levenshteinDistance from '..'

describe('Levenshtein Distance', () => {
  test('horse => ros', () => {
    expect(levenshteinDistance('horse', 'ros')).toBe(3)
    console.log(levenshteinDistance('intention', 'execution'))
  })
  test('intention => execution', () => {
    expect(levenshteinDistance('intention', 'execution')).toBe(5)
  })
})
