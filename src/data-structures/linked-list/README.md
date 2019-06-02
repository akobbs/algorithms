# Linked List

**Linked List** is a linear data structure in which the objects are arranged in
a linear order. In its most basic form, each object is a node that contains:
`data`, and a `reference` (link) to the next node in the sequence.

A list may have one of several forms:

- **singly linked list** (each node has `data` and reference to the `next` node)
- **doubly linked list** (each node has `data` and reference to the `prev` and
  `next` nodes)

##### Singly Linked List vs Doubly Linked List

- It's possible to insert or remove node in O(1) using **Doubly Linked List**,
  because each node has reference to the `prev` node. With **Singly Linked
  List** we have to find `prev` node at first, which requires O(n) time
- **Doubly Linked List** allows fast and easy sequentil access to the list in
  both directions

##### Time complexity

|                               | Linked List        | Dynamic Array |
| ----------------------------- | ------------------ | ------------- |
| Search by index               | O(n)               | O(1)          |
| Search by value               | O(n)               | O(n)          |
| Insert / remove first         | O(1)               | O(n) \*       |
| Insert / remove last          | O(1)               | O(1) \*       |
| Insert / delete in the middle | search time + O(1) | O(n) \*       |

\* If the space reserved for the dynamic array is exceeded, it is reallocated
and copied. The same process could be done to trim the array if actual size is
far larger than actually used. Such manipulation requires O(n) time.

##### Linked List vs Dynamic Array

- Insertion or deletion of an element at a specific point of a **linked list**,
  assuming that we have indexed a pointer to the node (before the one to be
  removed, or before the insertion point) already, is a O(1) operation, whereas
  insertion in a **dynamic array** at random locations will required moving half
  of the element on average, and all the elements in the worst case. Deletion in
  the **dynamic array** could be implemented by moving elements on the right in
  O(n) or in constant time by somehow marking its slot as _vacant_, this causes
  fragmentation that impedes the performance of iteration
- Number of elements to insert into a **linked list** is limited only by the
  total memory available, while a **dynamic array** will eventually fill up its
  underlaying array data structure and will have to reallocate, although the
  cost of reallocation can be averaged over insertions and the cost of an
  insertion due to reallocation would still be amortized O(1).
- Insert to the head / middle requires O(n) operations for the **dynamic array**
- **Dynamic array** allows O(1) random acces, while **linked list** allows only
  sequential access to elements

##### Space Complexity

O(n)

##### TODO:

- add pictures
- list with sentinel
