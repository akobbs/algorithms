# Hash Tables

### Direct-address tables

Suppose that we need to work with elements in which each element has a key in
`[0, m - 1]` range, where `m` is not too large. In that case we can use an array
`T[0..m - 1]` of length `m` in which each position corresponds to a key. So,
`key` = index in the array `T`

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

If key values are in range `[0, m - 1]`, where `m` is large , storing an array
of such size may be impractical or even impossible. Moreover, the set of keys
actually stored could be so small relative to the `[0, m - 1]` range that most
of the space allocated for `T` would be wasted.

- how to store negative values?
- how to use non-integer keys?

###### TODO:

- add picture

### Hash tables

Suppose, that the set of stored keys `K` is a `[0, m - 1]` range and the set of
all possible keys `U` is a `[0, n - 1]`, where `m` is much smaller than `n`. In
that case **hash table** requires much less storage than **direct-address
table**. The element is stored in index (slot) `h(k)`, where `h` is a hash
function to compute the index (slot) in the hash table from the key `k`.
`h: key => {0, 1, ... , l - 1}`, where `l` is the size of the hash table The
hash function reduces the range of array indices and hence the size of the
array.

According to the fact that the `K` (the set of stored keys) is much smaller than
`U` (the set of all possible keys) two keys could have the same hash value and
hence index (slot) in the hash table. Such situation is called a **collision**.

##### How To Resolve collisions?

Chaining In chaining, elements with the same hash value are placed in the same
linked list, because each index in the array contains pointer to the list or NIL
if it doesn't have any elements.

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
slots _Worst case behaviour:_ all `n` keys have the same hash value. The
worst-case time for searching is Θ(n) plus time to get hash value. Thus, it is
no better than linked list. The _average case_ depends on how well the hash
function distributes the set of keys to be stored among the `m` slots.

Let's assume that any element is equally likely to be placed into any of the `m`
slots using hash function. That assumption is called `simple uniform hashing`.
And O(1) time is enough to compute hash value.

Total time required for search is Θ(1 + n / m), because the expected length of
the list in the T[h(key)] is `n / m`. If the number of slots is proportional to
the number of element in the table, we have Θ(1 + O(m) / m) = O(1) for all
operations on average.

##### Complexity

Insertion - O(1) without checking if elemement is already present in the table
Search - proportional to the length of the list Delete - O(1) for the doubly
linked list without searching an element

###### TODO:

- add picture
