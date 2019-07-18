// O(n) time | O(n) space
export function threeWayPartition1(values, pivotIdx) {
  const pivot = values[pivotIdx]

  const smaller = values.filter(value => value < pivot)
  const equal = values.filter(value => value === pivot)
  const larger = values.filter(value => value > pivot)

  return [...smaller, ...equal, ...larger]
}

// O(n) time | O(1) spaces
export function threeWayPartition2(values, pivotIdx) {
  const pivot = values[pivotIdx]

  // smaller elements
  let smallerIdx = 0
  for (let i = 0; i < values.length; i++) {
    if (values[i] < pivot) {
      swap(values, i, smallerIdx)
      smallerIdx++
    }
  }

  // larger elements
  let largerIdx = values.length - 1
  for (let i = values.length - 1; i >= 0 && values[i] >= pivot; i--) {
    if (values[i] > pivot) {
      swap(values, i, largerIdx)
      largerIdx--
    }
  }
}

// O(n) time | O(1) space
export function threeWayPartition3(values, pivotIdx) {
  const pivot = values[pivotIdx]

  let smallerIdx = 0
  let currentIdx = 0
  let largerIdx = values.length - 1

  while (currentIdx < largerIdx) {
    const value = values[currentIdx]
    if (value > pivot) {
      swap(largerIdx, currentIdx)
      largerIdx--
    } else if (value < pivot) {
      swap(smallerIdx, currentIdx)
      smallerIdx++
      currentIdx++
    } else {
      currentIdx++
    }
  }
}

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
