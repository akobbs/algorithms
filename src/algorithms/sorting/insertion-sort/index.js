// Worst case: O(n^2) time | O(1) space
// Best case (sorted array): O(n) | O(1) space
export default function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let value = array[i]
    let j = i - 1

    while (j >= 0 && value < array[j]) {
      array[j] = array[j + 1]
      j--
    }

    array[j + 1] = value
  }
}
