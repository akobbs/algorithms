// Worst case: O(n^2) time | O(1) space
// Best case (sorted array): O(n) | O(1) space

// Optimization:
// n-th pass finds the n-th largest element and puts it into its final place
export function bubbleSort(array) {
  let isSorted = false
  let counter = 0

  while (!isSorted) {
    isSorted = true
    for (let i = 0; i < array.length - 1 - counter; i++) {
      if (array[i] > array[i + 1]) {
        const temp = array[i]
        array[i] = array[i + 1]
        array[i + 1] = temp
        isSorted = false
      }
    }

    counter++
  }
}

// Optimization:
// After every pass, all elements after the last swap are sorted, and don't need to be checked again
export function bubbleSortOptimized(array) {
  let n = array.length

  while (n > 1) {
    let newN = 0

    for (let i = 0; i < n - 1; i++) {
      if (array[i] > array[i + 1]) {
        const temp = array[i]
        array[i] = array[i + 1]
        array[i + 1] = temp
        newN = i
      }
    }

    n = newN
  }
}
