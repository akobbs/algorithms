// (TIME | SPACE) COMPLEXITY
// Worst / Average case: O(n^2) time | O(1) space
// Best case (sorted array): O(n) | O(1) space

// Optimization:
// n-th pass finds the n-th largest element and puts it into its final place
export function bubbleSort1(array) {
  let isSorted = false
  let counter = 0

  // No swaps means that array is already sorted
  while (!isSorted) {
    isSorted = true
    for (let i = 0; i < array.length - 1 - counter; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1)
        isSorted = false
      }
    }

    counter++
  }
}

// Optimization:
// After every pass, all elements after the last swap are sorted, and don't need to be checked again
export function bubbleSort2(array) {
  let n = array.length - 1

  while (n > 1) {
    let newN = 0

    for (let i = 0; i < n; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1)

        // There is no need check elements after `i` index, as those elements are already in correct place
        newN = i + 1
      }
    }

    n = newN
  }
}

function swap(array, oneIdx, twoIdx) {
  const temp = array[oneIdx]
  array[oneIdx] = array[twoIdx]
  array[twoIdx] = temp
}
