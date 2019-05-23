import ArrayQueue from '../ArrayQueue'
import ListQueue from '../ListQueue'

const createArrayWithValues = numberOfValues =>
  Array(numberOfValues)
    .fill(0)
    .map((value, index) => index)

const runTests = queueCreator => {
  test('queue / dequeue', () => {
    const queue = queueCreator()
    const numberOfValues = 100
    const values = createArrayWithValues(numberOfValues)

    values.forEach(value => queue.enqueue(value))

    const resultValues = []
    values.forEach(() => resultValues.push(queue.dequeue()))

    expect(resultValues).toEqual(values)
  })

  test('dequeue for empty queue', () => {
    const queue = queueCreator()
    const dequeueWithException = () => queue.dequeue()

    expect(dequeueWithException).toThrow(Error)

    queue.enqueue(1)
    queue.dequeue()

    expect(dequeueWithException).toThrow(Error)
  })

  test('isEmpty', () => {
    const queue = queueCreator()
    const numberOfValues = 100
    const values = createArrayWithValues(numberOfValues)

    expect(queue.isEmpty()).toBe(true)

    values.forEach(value => {
      queue.enqueue(value)
      expect(queue.isEmpty()).toBe(false)
    })

    values.forEach(() => {
      expect(queue.isEmpty()).toBe(false)
      queue.dequeue()
    })

    expect(queue.isEmpty()).toBe(true)
  })

  test('size', () => {
    const queue = queueCreator()
    expect(queue.size()).toBe(0)

    const numberOfValues = 100
    const values = createArrayWithValues(numberOfValues)

    values.forEach((value, index) => {
      queue.enqueue(value)
      expect(queue.size()).toBe(index + 1)
    })

    values.forEach((value, index) => {
      queue.dequeue()
      expect(queue.size()).toBe(numberOfValues - index - 1)
    })

    const dequeueWithException = () => queue.dequeue()
    expect(dequeueWithException).toThrow(Error)
    expect(queue.size()).toBe(0)
  })
}

describe('ArrayQueue', () => {
  runTests(() => new ArrayQueue())
})

describe('ListQueue', () => {
  runTests(() => new ListQueue())
})
