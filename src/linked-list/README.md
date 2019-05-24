# Linked List

**Linked List** is a linear data structure in which the objects are arranged in
a linear order. In its most basic form, each object is a node that contains:
`data`, and a `reference` (link) to the next node in the sequence.

A list may have one of several forms:

- **singly linked list** (each node has `data` and reference to the `next` node)
- **doubly linked list** (each node has `data` and reference to the `prev` and
  `next` nodes)

##### Singly Linked List vs Doubly Linked List

- It's possible to remove node from the list in O(1) using **Doubly Linked
  List**, because each node has reference to the `prev` node. With **Singly
  Linked List** we have to find `prev` node at first, which requires O(n) time
- **Doubly Linked List** gives and ability to loop through list in reverse order
  (from tail to head)

##### Time complexity

|                               | Linked List        | Array   |
| ----------------------------- | ------------------ | ------- |
| Search by index               | O(n)               | O(1)    |
| Search by value               | O(n)               | O(n)    |
| Insert / remove first         | O(1)               | O(n) \* |
| Insert / remove last          | O(1)               | O(1) \* |
| Insert / delete in the middle | search time + O(1) | O(n) \* |

Linked List vs Array

-

##### Space Complexity

O(n)

##### TODO:

- add pictures
- compare linked list with array
