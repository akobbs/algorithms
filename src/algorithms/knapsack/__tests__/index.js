import knapsackProblem from '..'

describe('Knapsack problem', () => {
  test('1', () => {
    const result = knapsackProblem([[1, 2], [4, 3], [5, 6], [6, 7]], 10)
    console.log(result)
  })
})
