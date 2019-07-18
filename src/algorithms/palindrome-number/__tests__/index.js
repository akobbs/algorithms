import {isPalindrome1, isPalindrome2, isPalindrome3, isPalindrome4} from '..'

const fns = [
  {
    fn: isPalindrome1,
    name: '1',
  },
  {
    fn: isPalindrome2,
    name: '2',
  },
  {
    fn: isPalindrome3,
    name: '3',
  },
  {
    fn: isPalindrome4,
    name: '4',
  },
]

fns.forEach(({fn: isPalindrome, name}) => {
  describe(`is number palindrome: ${name}`, () => {
    test('palindromes', () => {
      expect(isPalindrome(0)).toBe(true)
      expect(isPalindrome(1)).toBe(true)
      expect(isPalindrome(11)).toBe(true)
      expect(isPalindrome(121)).toBe(true)
      expect(isPalindrome(12321)).toBe(true)
      expect(isPalindrome(123321)).toBe(true)
    })

    test('not palindromes', () => {
      expect(isPalindrome(12)).toBe(false)
      expect(isPalindrome(123)).toBe(false)
      expect(isPalindrome(123454327)).toBe(false)
      expect(isPalindrome(123457321)).toBe(false)
    })
  })
})
