# Queue

**Queue** is a linear data structure with ability to add and remove items.
Basically, it has `enqueue` operation to insert the element, and `dequeue`
operation without arguments to delete the element.

**Queue** implements a `first-in, first-out`, or `FIFO`, policy. The element
deleted always the one that has been in the collection for the longest time.

**Queue** operates like a line of customers waiting to pay a cashier. When an
element is enqueued, it takes it's place at the tail of the queue, just as a
newly arriving customer takes a place at the end of the line. The element
dequeued is always the one at the head of the queue, like the customer at the
head of the line who has waited the longest.

##### Time complexity

| Enqueue | Dequeue | Peek |
| ------- | ------- | ---- |
| O(1)    | O(1)    | O(1) |

##### Space Complexity

O(n)

##### TODO:

- add pictures
- info about JavaScript implementation
