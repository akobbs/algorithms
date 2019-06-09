// Recursive
// O(2^n) time | O(n) space
export function getNthFibonacci1(n) {
  if (n === 1) {
    return 0
  }

  if (n === 2) {
    return 1
  }

  return getNthFibonacci1(n - 1) + getNthFibonacci1(n - 2)
}

// Recursive with memoization
//
// Memoization is an optimization technique used to speed up calculations by
// storing the results of expensive function calls and returning the cached result
// when the same inputs occur again
//
// O(n) time | O(n) space
export function getNthFibanacci2(n, memoized = {1: 0, 2: 1}) {
  if (n in memoized) {
    return memoized[n]
  } else {
    memoized[n] =
      getNthFibanacci2(n - 1, memoized) + getNthFibanacci2(n - 2, memoized)

    return memoized[n]
  }
}

// Iterative
// O(n) time | O(1) space
export function getNthFibonacci3(n) {
  const values = [0, 1]

  let counter = 3
  while (counter <= n) {
    const nextValue = values[0] + values[1]
    values[0] = values[1]
    values[1] = nextValue

    counter++
  }

  return n > 1 ? values[1] : values[0]
}
