import {isPermutationOfPalindrome} from '../index'

describe('is permutation of the palindrome', () => {
  test('permutation', () => {
    const examples = ['aabbccddeeffg', 'hheetteeqqeewwpp', 'aba']

    examples.forEach(str => {
      expect(isPermutationOfPalindrome(str)).toBe(true)
    })
  })

  test('not permutation', () => {
    const examples = ['zattjjfflliiee', 'acv', 'rrttyyuuggffiu']

    examples.forEach(str => {
      expect(isPermutationOfPalindrome(str)).toBe(false)
    })
  })
})
