// TIME COMPLEXITY:
// Worst-case: O(n^2) time
// Average: O(n log n)
// Best-case (sorted array): O(n log n) (simple partition)
// or O(n)(three - way partition and equal keys)
//
// SPACE COMPLEXITY:
// Worst-case: `O(n)` auxiliary (naive) or `O(log n)` auxiliary (Sedgewick 1978)

export default function quicksort(array) {
  quicksortHelper(array, 0, array.length - 1)
}

function quicksortHelper(array, from, to) {
  if (from < to) {
    const p = partition(array, from, to)
    quicksortHelper(array, from, p - 1)
    quicksortHelper(array, p + 1, to)
  }
}

function partition(array, from, to) {
  const pivot = array[from]
  let i = from + 1
  let j = to

  while (true) {
    while (array[i] < pivot && i < to) {
      i++
    }

    while (array[j] > pivot && j > from) {
      j--
    }

    if (i >= j) {
      break
    }

    swap(array, i, j)
  }

  swap(array, from, j)

  return j
}

function swap(array, oneIdx, twoIdx) {
  const temp = array[oneIdx]
  array[oneIdx] = array[twoIdx]
  array[twoIdx] = temp
}
