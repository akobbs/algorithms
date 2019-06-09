// O(n) time | O(1) space
export function findThreeLargestNumbers(array) {
  return findNLargestNumbers(array, 3)
}

function findNLargestNumbers(array, n) {
  const largestNumbers = Array(n).fill(-Infinity)

  array.forEach(value => {
    let index = n - 1

    while (value < largestNumbers[index] && index >= 0) {
      index--
    }

    if (index >= 0) {
      for (let i = 0; i < index; i++) {
        largestNumbers[i] = largestNumbers[i + 1]
      }

      largestNumbers[index] = value
    }
  })

  return largestNumbers
}
