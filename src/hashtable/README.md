# Hash Tables

### Direct-address tables

Could be used when we can afford to allocate an array that has one position for
every possible key. With direct addressing, an element with _k_ is stored in
slot(index) _k_.

##### Implementation

```
search(T, key) {
    return T[key]
}
```

```
insert(T, element) {
    T[element.key] = element
}
```

```
delete(T, element) {
    T[element.key] = NIL
}
```

##### Complexity

Search / Insert / Delete - **O(1)**

##### Downsides

When the number of keys actually stored is small relative to the total number of
possible keys, **hash tables** become an effective alternative to **directly
addressing** an array, since a **hash table** typically uses an array of size
proportional to the number of keys actually stored. Instead of using the key as
an array index directly, the array index is computed from the keys.

- how to store non-integer keys?

###### TODO:

- add picture

### Hash tables

If the number of possible keys is large, storing an array of such may be
impractical. Furthemore, the set of keys actully stored may be so small relative
to all possible keys that most of the space allocated would be wasted. Hash
table requires much less storage than a direct-address table.

The element is stored in slot `hash(key)`, where _hash_ is a function to compute
the slot from the _key_. The hash function reduces the range of array indices
and hence the size of the array.

Two keys could have the same hash value and hence index (slot) in the hash
table. Such situation is called a **collision**.

Search using hash table is O(1) for the average-case time Search using direct
addressing is O(1) for the worst-case time

##### How To Resolve collisions?

##### Chaining

In chaining, elements with the same hash value are placed in the same linked
list, because each index in the array contains pointer to the list or _NIL_ if
it doesn't have any elements.

##### Implementation

```
search(T, key) {
    search for an element in the list T[h(key)]
}
```

```
insert(T, element) {
    insert element at the head of list T[h(element.key)]
}
```

```
delete(T, element) {
    delete element from the list T[h(element.key)]
}
```

##### Analysis of hashing with chaining

**Load factor** - `n / m`, where `n` - number of elements and `m` - number of
slots, that is, the average number of elements stored in a chain.

**Worst case behaviour:** all `n` keys have the same hash value. The worst-case
time for searching is Θ(n) plus time to get hash value. Thus, it is no better
than linked list. The _average case_ depends on how well the hash function
distributes the set of keys to be stored among the `m` slots.

Let's assume that any element is equally likely to be placed into any of the `m`
slots using hash function. That assumption is called `simple uniform hashing`.
And O(1) time is enough to compute hash value.

Total time required for search is Θ(1 + n / m), because the expected length of
the list in the T[h(key)] is `n / m`. If the number of slots is proportional to
the number of element in the table, we have Θ(1 + O(m) / m) = O(1) for all
operations on average.

##### Complexity

Insertion - O(1) without checking if elemement is already present in the table
Search - O(1) on average and O(n) in the worst case Delete - O(1) to delete +
time to find element

###### TODO:

- add picture
- add open addressing
