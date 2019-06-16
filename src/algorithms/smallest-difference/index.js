// Brute Force
// O(n^2) time
// O(1) space
export function findSmallestDifference1(arrayOne, arrayTwo) {
  let smallestPair = []
  let smallestDiff = Infinity

  for (let i = 0; i < arrayOne.length; i++) {
    for (let j = 0; j < arrayTwo.length; j++) {
      const firstNum = arrayOne[i]
      const secondNum = arrayTwo[j]

      const currentDiff = Math.abs(firstNum - secondNum)

      if (currentDiff === 0) {
        return [firstNum, secondNum]
      }

      if (smallestDiff > currentDiff) {
        smallestDiff = currentDiff
        smallestPair = [firstNum, secondNum]
      }
    }
  }

  return smallestPair
}

// O(n log n) time
// O(1) space
export function findSmallestDifference2(arrayOne, arrayTwo) {
  arrayOne.sort()
  arrayTwo.sort()

  let oneIdx = 0
  let twoIdx = 0
  let smallestDiff = Infinity
  let smallestPair = []

  while (oneIdx < arrayOne.length && twoIdx < arrayTwo.length) {
    const firstNum = arrayOne[oneIdx]
    const secondNum = arrayTwo[twoIdx]

    let currentDiff

    if (firstNum > secondNum) {
      currentDiff = firstNum - secondNum
      twoIdx++
    } else if (firstNum < secondNum) {
      currentDiff = secondNum - firstNum
      oneIdx++
    } else {
      return [firstNum, secondNum]
    }

    if (smallestDiff > currentDiff) {
      smallestDiff = currentDiff
      smallestPair = [firstNum, secondNum]
    }
  }

  return smallestPair
}
