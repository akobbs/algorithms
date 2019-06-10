# Heap

A heap is a specialized tree-based data structure which is essentially an almost
complete tree that satisfies the heap property: in a max heap, for any given
node C, if P is a parent node of C, then the key (the value) of P is greater
than or equal to the key of C. In a min heap, the key of P is less than or equal
to the key of C.

In a complete binary tree every level, except possibly the last, is completely
filled, and all nodes in the last level are as far left as possible.

### Time Complexity

| Case    | Insert   | Delete   | Peek |
| ------- | -------- | -------- | ---- |
| Average | O(1)     | O(log n) | O(1) |
| Worst   | O(log n) | O(log n) | O(1) |

### Resources

[Wikipedia](https://en.wikipedia.org/wiki/Binary_heap)
