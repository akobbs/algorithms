export default function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j
      }
    }

    swap(array, i, minIndex)
  }
}

function swap(array, first, second) {
  const temp = array[first]
  array[first] = array[second]
  array[second] = temp
}
