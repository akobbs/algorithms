import LinkedList from '../linked-list/LinkedList'

const INIT_CAPACITY = 12
const DEFAULT_LOAD_FACTOR = 2

// Add ability to configure capacity and load factor
export default class HashTable {
  constructor(capacity = INIT_CAPACITY, equals = (a, b) => a === b) {
    this.capacity = capacity
    this.loadFactor = DEFAULT_LOAD_FACTOR
    this.equals = equals
    this.buckets = Array(this.capacity)
      .fill(null)
      .map(() => new LinkedList((a, b) => this.equals(a.key, b.key)))

    this.n = 0
  }
  // https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
  // get hash for string value
  hashCode(key) {
    key = key + ''

    let hash = 0

    if (this.length === 0) {
      return hash
    }

    for (let i = 0; i < key.length; i++) {
      let chr = key.charCodeAt(i)
      hash = (hash << 5) - hash + chr
      hash |= 0 // Convert to 32bit integer
    }

    return hash % this.capacity
  }

  resize(newCapacity) {
    const newTable = new HashTable(newCapacity, this.equals)

    for (let [key, value] of this) {
      newTable.put(key, value)
    }

    this.capacity = newTable.capacity
    this.buckets = newTable.buckets
    this.n = newTable.n
  }

  get(key) {
    const hash = this.hashCode(key)
    const list = this.buckets[hash]

    for (let item of list) {
      if (this.equals(key, item.key)) {
        return item.value
      }
    }

    return null
  }

  put(key, value) {
    if (this.n > this.loadFactor * this.capacity) {
      this.resize(this.capacity * 2)
    }

    const hash = this.hashCode(key)
    const list = this.buckets[hash]

    for (let item of list) {
      if (this.equals(key, item.key)) {
        item.value = value
        return
      }
    }

    list.addLast({
      key,
      value,
    })

    this.n++
  }

  remove(key) {
    const hash = this.hashCode(key)
    const list = this.buckets[hash]

    // find better way
    const isRemoved = list.remove({key})

    if (isRemoved) {
      this.n--
    }

    if (this.n > INIT_CAPACITY && this.n <= this.loadFactor * this.capacity) {
      this.resize(this.capacity / 2)
    }

    return isRemoved
  }

  [Symbol.iterator]() {
    let currentBucketIndex = 0
    let currentListIterator = null

    const getNextNonEmptyValue = () => {
      if (currentListIterator) {
        const result = currentListIterator.next()
        if (!result.done) {
          const {key, value} = result.value

          return {
            done: false,
            value: [key, value],
          }
        }

        currentListIterator = null
        currentBucketIndex++
      }

      while (currentBucketIndex < this.capacity) {
        const list = this.buckets[currentBucketIndex]

        if (list.length > 0) {
          currentListIterator = list[Symbol.iterator]()
          const result = currentListIterator.next()
          const {key, value} = result.value

          return {
            done: false,
            value: [key, value],
          }
        }

        currentBucketIndex++
      }

      return {
        done: true,
      }
    }

    return {
      next() {
        return getNextNonEmptyValue()
      },
    }
  }
}
