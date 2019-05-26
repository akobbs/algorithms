// Brute force
// O(n^2) time
// O(1) space
export function twoNumberSum1(numbers, targetSum) {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === targetSum) {
        return [numbers[i], numbers[j]]
      }
    }
  }

  return []
}

// With hash table
// O(n) time
// O(n) space
export function twoNumberSum2(numbers, targetSum) {
  const numberTable = {}

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i]
    const numberToMatch = targetSum - number

    if (numberTable[numberToMatch]) {
      return [number, numberToMatch]
    } else {
      numberTable[number] = true
    }
  }

  return []
}

// Sorting and binary search
// O(n*log(n)) time (sorting)
// O(1) space, but depends on sorting algorithm
export function twoNumberSum3(numbers, targetSum) {
  numbers.sort((a, b) => a - b)

  for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index]
    const numberToMatch = targetSum - number

    // binary search
    const matchNumberIndex = binarySeach(numbers, numberToMatch)
    if (matchNumberIndex !== -1) {
      if (matchNumberIndex !== index) {
        return [number, numberToMatch]
      }

      if (
        matchNumberIndex > 0 &&
        numbers[matchNumberIndex - 1] === numbers[matchNumberIndex]
      ) {
        return [numbers[matchNumberIndex], numbers[matchNumberIndex]]
      }

      if (
        matchNumberIndex < numbers.length - 1 &&
        numbers[matchNumberIndex + 1] === numbers[matchNumberIndex]
      ) {
        return [numbers[matchNumberIndex], numbers[matchNumberIndex]]
      }
    }
  }

  return []
}

// Sorting and walking inward
// O(n*log(n)) time (sorting)
// O(1) space, but depends on sorting algorithm
export function twoNumberSum4(numbers, targetSum) {
  numbers.sort((a, b) => a - b)

  let leftIndex = 0
  let rightIndex = numbers.length - 1

  while (leftIndex < rightIndex) {
    const sum = numbers[leftIndex] + numbers[rightIndex]

    if (sum === targetSum) {
      return [numbers[leftIndex], numbers[rightIndex]]
    } else if (sum < targetSum) {
      leftIndex++
    } else {
      rightIndex--
    }
  }

  return []
}

function binarySeach(array, value) {
  let from = 0
  let to = array.length - 1

  while (from <= to) {
    let middle = Math.floor((from + to) / 2)
    if (value < array[middle]) {
      to = middle - 1
    } else if (value > array[middle]) {
      from = middle + 1
    } else {
      return middle
    }
  }

  return -1
}
