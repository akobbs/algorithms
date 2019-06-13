export function mergeSort1(array) {
  mergeSortHelper1(array, 0, array.length - 1)
}

function mergeSortHelper1(array, fromIdx, toIdx) {
  if (fromIdx < toIdx) {
    const middleIdx = Math.floor((fromIdx + toIdx) / 2)

    mergeSortHelper1(array, fromIdx, middleIdx)
    mergeSortHelper1(array, middleIdx + 1, toIdx)

    merge1(array, fromIdx, middleIdx, toIdx)
  }
}

export function merge1(array, fromIdx, middleIdx, toIdx) {
  const leftArray = []
  const rightArray = []

  for (let i = fromIdx; i <= middleIdx; i++) {
    leftArray.push(array[i])
  }

  for (let i = middleIdx + 1; i <= toIdx; i++) {
    rightArray.push(array[i])
  }

  let resultIdx = fromIdx
  let leftIdx = 0
  let rightIdx = 0

  while (leftIdx < leftArray.length && rightIdx < rightArray.length) {
    if (leftArray[leftIdx] <= rightArray[rightIdx]) {
      array[resultIdx] = leftArray[leftIdx]
      leftIdx++
    } else {
      array[resultIdx] = rightArray[rightIdx]
      rightIdx++
    }

    resultIdx++
  }

  while (leftIdx < leftArray.length) {
    array[resultIdx] = leftArray[leftIdx]
    leftIdx++
    resultIdx++
  }

  while (rightIdx < rightArray.length) {
    array[resultIdx] = rightArray[rightIdx]
    rightIdx++
    resultIdx++
  }
}

export function mergeSort2(array) {
  const aux = Array(array.length).fill(undefined)
  mergeSortHelper2(array, aux, 0, array.length - 1)
}

function mergeSortHelper2(array, aux, fromIdx, toIdx) {
  if (fromIdx < toIdx) {
    const middleIdx = Math.floor((fromIdx + toIdx) / 2)

    mergeSortHelper2(array, aux, fromIdx, middleIdx)
    mergeSortHelper2(array, aux, middleIdx + 1, toIdx)

    merge2(array, aux, fromIdx, middleIdx, toIdx)
  }
}

export function merge2(array, aux, fromIdx, middleIdx, toIdx) {
  for (let i = fromIdx; i <= toIdx; i++) {
    aux[i] = array[i]
  }

  let leftIdx = fromIdx
  let rightIdx = middleIdx + 1

  for (let k = fromIdx; k <= toIdx; k++) {
    if (leftIdx > middleIdx) {
      array[k] = aux[rightIdx]
      rightIdx++
    } else if (rightIdx > toIdx) {
      array[k] = aux[leftIdx]
      leftIdx++
    } else if (array[leftIdx] < array[rightIdx]) {
      array[k] = array[leftIdx]
      leftIdx++
    } else {
      array[k] = array[rightIdx]
      rightIdx++
    }
  }
}

export function merge3(array, fromIdx, middleIdx, toIdx) {
  const leftArray = []
  const rightArray = []

  for (let i = fromIdx; i <= middleIdx; i++) {
    leftArray.push(array[i])
  }
  leftArray.push(Infinity)

  for (let i = middleIdx + 1; i <= toIdx; i++) {
    rightArray.push(array[i])
  }
  rightArray.push(Infinity)

  let leftIdx = 0
  let rightIdx = 0

  for (let k = fromIdx; k <= toIdx; k++)
    if (leftArray[leftIdx] <= rightArray[rightIdx]) {
      array[k] = leftArray[leftIdx]
      leftIdx++
    } else {
      array[k] = rightArray[rightIdx]
      rightIdx++
    }
}
