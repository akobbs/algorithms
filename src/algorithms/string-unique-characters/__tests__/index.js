import {
  isUniqueCharacters1,
  isUniqueCharacters2,
  isUniqueCharacters3,
  isUniqueCharacters4,
} from '../index'

const fns = [
  isUniqueCharacters1,
  isUniqueCharacters2,
  isUniqueCharacters3,
  isUniqueCharacters4,
]

const alphabet = 'abcdefghijklmnopqrstuvwxyz'

fns.forEach((fn, index) =>
  describe(`isUniqueCharacters: ${index}`, () => {
    test('alphabet', () => {
      expect(fn(alphabet)).toBe(true)
    })

    test('with duplications', () => {
      expect(fn(`${alphabet}a`)).toBe(false)
      expect(fn(`a${alphabet}`)).toBe(false)
    })
  }),
)
