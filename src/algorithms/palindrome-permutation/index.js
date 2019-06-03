// O(n) time
// O(n) space
export function isPermutationOfPalindrome(str) {
  const characters = Object.create(null)

  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    if (!characters[char]) {
      characters[char] = 1
    } else {
      characters[char]++
    }
  }

  let hasOddNumber = false

  for (const key of Object.keys(characters)) {
    if (characters[key] % 2 === 1) {
      if (hasOddNumber) {
        return false
      }

      hasOddNumber = true
    }
  }

  return true
}
