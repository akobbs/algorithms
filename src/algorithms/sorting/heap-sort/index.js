import Heap from '../../../data-structures/heap/'

// TIME COMPLEXITY
// Worst / Average / Best case : O(n log n) time
// Best case (sorted array): O(n)
//
// SPACE COMPLEXITY
// O(1)

// TODO: implement without creating additional array
export default function heapSort(array) {
  const heap = new Heap(array)

  const sortedArray = []
  while (heap.size() > 0) {
    const max = heap.deleteMax()
    sortedArray.push(max)
  }

  return sortedArray.reverse()
}
