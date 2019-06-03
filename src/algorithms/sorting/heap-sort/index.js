import Heap from '../../../data-structures/heap/'

export default function heapSort(array) {
  const heap = new Heap(array)

  const sortedArray = []
  while (heap.size() > 0) {
    const max = heap.deleteMax()
    sortedArray.push(max)
  }

  return sortedArray.reverse()
}
