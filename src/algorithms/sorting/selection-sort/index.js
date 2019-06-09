// (TIME | SPACE) COMPLEXITY
// Worst / Average / Best case: O(n^2) time | O(1) space

export default function selectionSort(array) {
  // i < array.length - 1 because single element is also min element
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i

    for (let j = i + 1; j < array.length; j++) {
      // if this element is less, then it is the new min element
      if (array[j] < array[minIndex]) {
        minIndex = j
      }
    }

    if (i !== minIndex) {
      swap(array, i, minIndex)
    }
  }
}

function swap(array, oneIdx, twoIdx) {
  const temp = array[oneIdx]
  array[oneIdx] = array[twoIdx]
  array[twoIdx] = temp
}
