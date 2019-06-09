# Selection Sort

### Algorithm

The algorithm divides the input list into two parts: the sublist of items
already sorted, which is built up from left to right at the front (left) of the
list, and the sublist of items remaining to be sorted that occupy the rest of
the list. Initially, the sorted sublist is empty and the unsorted sublist is the
entire input list. The algorithm proceeds by finding the smallest (or largest,
depending on sorting order) element in the unsorted sublist, exchanging
(swapping) it with the leftmost unsorted element (putting it in sorted order),
and moving the sublist boundaries one element to the right.

### Optimizations

- the n-th pass finds the n-th largest element and puts it into its final place.
  So, the inner loop can avoid looking at the last n − 1 items when running for
  the n-th time (`bubbleSort1` implementation)
- it can happen that more than one element is placed in their final position on
  a single pass. In particular, after every pass, all elements after the last
  swap are sorted, and do not need to be checked again. (`bubbleSort2`
  implementation)

### Time complexity

- Worst-case: `O(n^2)`
- Best-case (sorted array): `O(n^2)`
- Average: `O(n^2)`

### Space Complexity

`O(1)`

### Resources

[Wikipedia](https://en.wikipedia.org/wiki/Selection_sort)
