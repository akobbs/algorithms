import ArrayStack from '../ArrayStack'
import ListStack from '../ListStack'

const createArrayWithValues = numberOfValues =>
  Array(numberOfValues)
    .fill(0)
    .map((value, index) => index)

const runTests = stackCreator => {
  test('push / pop', () => {
    const stack = stackCreator()
    const numberOfValues = 100
    const values = createArrayWithValues(numberOfValues)

    values.forEach(v => stack.push(v))

    const resultValues = []
    values.forEach(() => resultValues.push(stack.pop()))

    const reversedValues = [...values].reverse()
    expect(resultValues).toEqual(reversedValues)
  })

  test('pop for empty stack', () => {
    const stack = stackCreator()
    const popWithException = () => stack.pop()

    expect(popWithException).toThrow(Error)

    stack.push(1)
    stack.pop()

    expect(popWithException).toThrow(Error)
  })

  test('isEmpty', () => {
    const stack = stackCreator()
    const numberOfValues = 100
    const values = createArrayWithValues(numberOfValues)

    expect(stack.isEmpty()).toBe(true)

    values.forEach(value => {
      stack.push(value)
      expect(stack.isEmpty()).toBe(false)
    })

    values.forEach(() => {
      expect(stack.isEmpty()).toBe(false)
      stack.pop()
    })

    expect(stack.isEmpty()).toBe(true)
  })

  test('size', () => {
    const stack = stackCreator()
    expect(stack.size()).toBe(0)

    const numberOfValues = 100
    const values = createArrayWithValues(numberOfValues)

    values.forEach((value, index) => {
      stack.push(value)
      expect(stack.size()).toBe(index + 1)
    })

    values.forEach((value, index) => {
      stack.pop()
      expect(stack.size()).toBe(numberOfValues - index - 1)
    })

    const popWithException = () => stack.pop()
    expect(popWithException).toThrow(Error)
    expect(stack.size()).toBe(0)
  })
}

describe('ArrayStack', () => {
  runTests(() => new ArrayStack())
})

describe('ListStack', () => {
  runTests(() => new ListStack())
})
