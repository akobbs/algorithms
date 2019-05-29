// O(log(n) time
// O(log(n)) space
export function binarySearchRecursive(array, target) {
  return binarySearchHelper(array, target, 0, array.length - 1)
}

function binarySearchHelper(array, target, start, end) {
  if (start > end) {
    return -1
  }

  const middle = Math.floor((start + end) / 2)
  const potentialMatch = array[middle]

  if (potentialMatch === target) {
    return middle
  } else if (potentialMatch < target) {
    return binarySearchHelper(array, target, middle + 1, end)
  } else {
    return binarySearchHelper(array, target, start, middle - 1)
  }
}

// O(log(n)) time
// O(1) space
export function binarySearchIterative(array, target) {
  let start = 0
  let end = array.length - 1

  while (start <= end) {
    const middle = Math.floor((start + end) / 2)
    const potentialMatch = array[middle]

    if (potentialMatch === target) {
      return middle
    } else if (potentialMatch < target) {
      start = middle + 1
    } else {
      end = middle - 1
    }
  }

  return -1
}
