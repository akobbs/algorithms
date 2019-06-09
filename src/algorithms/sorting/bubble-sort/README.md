# Bubble Sort

### Algorithm

Repeatedly steps through the list, compares adjacent pairs and swaps them if
they are in the wrong order. The pass through the list is repeated until the
list is sorted. The algorithm, is named for the way smaller or larger elements
"bubble" to the top of the list.

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
- Best-case (sorted array): `O(n)`
- Average: `O(n^2)`

### Space Complexity

`O(1)`

### Resources

[Wikipedia](https://en.wikipedia.org/wiki/Bubble_sort)
