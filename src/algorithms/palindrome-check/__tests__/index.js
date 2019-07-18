import {
  isPalindrome1,
  isPalindrome2,
  isPalindrome3,
  isPalindrome4,
  isPalindrome5,
  isPalindrome6,
} from '../index'

const fns = [
  isPalindrome1,
  isPalindrome2,
  isPalindrome3,
  isPalindrome4,
  isPalindrome5,
  isPalindrome6,
]

fns.forEach((fn, index) =>
  describe(`is palindrome: ${index + 1}`, () => {
    test('palindromes', () => {
      const examples = [
        'aba',
        'anna',
        'aibohphobia',
        'kinnikinnik',
        'deleveled',
        'rotator',
        'weirtsdgnsdbvjsdfjhurekjtskaakstjkeruhjfdsjvbdsngdstriew',
      ]

      examples.forEach(str => {
        expect(fn(str)).toBe(true)
      })
    })

    test('not palindromes', () => {
      const examples = ['abc', 'akta', 'rataatak']

      examples.forEach(str => {
        expect(fn(str)).toBe(false)
      })
    })
  }),
)
