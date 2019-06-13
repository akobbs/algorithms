// Brute force
// O(n^3) time
// O(1) space
export function threeNumberSum1(array, targetSum) {
  const triplets = []

  for (let i = 0; i < array.length - 2; i++) {
    for (let j = i + 1; j < array.length - 1; j++) {
      for (let k = j + 1; k < array.length; k++) {
        if (array[i] + array[j] + array[k] === targetSum) {
          triplets.push([array[i], array[j], array[k]])
        }
      }
    }
  }

  return triplets
}

// Hashing
// O(n^2) time
// O(n) space
export function threeNumberSum2(array, targetSum) {
  const triplets = []

  for (let i = 0; i < array.length - 1; i++) {
    const numberTable = Object.create(null)
    for (let j = i + 1; j < array.length; j++) {
      const numberToMatch = targetSum - array[i] - array[j]

      if (numberTable[numberToMatch]) {
        triplets.push([array[i], array[j], numberToMatch])
      } else {
        numberTable[array[j]] = true
      }
    }
  }

  return triplets
}

// Sort and walk
// O(n^2) time
// O(1) space
export function threeNumberSum3(array, targetSum) {
  const triplets = []

  array.sort()

  for (let i = 0; i < array.length - 2; i++) {
    let leftIdx = i + 1
    let rightIdx = array.length - 1

    while (leftIdx < rightIdx) {
      const sum = array[i] + array[leftIdx] + array[rightIdx]

      if (sum === targetSum) {
        triplets.push([array[i], array[leftIdx], array[rightIdx]])
        leftIdx++
        rightIdx--
      } else if (sum < targetSum) {
        leftIdx++
      } else {
        rightIdx--
      }
    }
  }

  return triplets
}
