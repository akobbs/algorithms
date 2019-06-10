import MaxHeap from '../../data-structures/heap'

// Iterative
export function isMaxHeap1(array) {
  const lastParentIdx = MaxHeap.getParentIndex(array.length - 1)

  for (let i = 0; i <= lastParentIdx; i++) {
    const leftIdx = MaxHeap.getLeftChildIndex(i)
    const rightIdx = MaxHeap.getRightChildIndex(i)

    if (array[i] < array[leftIdx] || array[i] < array[rightIdx]) {
      return false
    }
  }

  return true
}

// Recursive
export function isMaxHeap2(array, idx = 0) {
  if (idx > MaxHeap.getParentIndex(array.length - 1)) {
    return true
  }

  const leftIdx = MaxHeap.getLeftChildIndex(idx)
  const rightIdx = MaxHeap.getRightChildIndex(idx)

  if (array[idx] < array[leftIdx] || array[idx] < array[rightIdx]) {
    return false
  }

  return isMaxHeap2(array, leftIdx) && isMaxHeap2(array, rightIdx)
}
