// ASCII uses 7 bits to represent a character. We can represent 128 characters maximum.
const MAX_LENGTH = 128

// O(n*log(n)) time
// O(n) space

// Sort strings and compare
export function isPermutation1(first, second) {
  if (first.length !== second.length) {
    return false
  }

  const firstSorted = first
    .split('')
    .sort()
    .join('')

  const secondSorted = second
    .split('')
    .sort()
    .join('')

  return firstSorted === secondSorted
}

// O(n) time
// O(n) space

// Store characters in the object
export function isPermutation2(first, second) {
  if (first.length !== second.length) {
    return false
  }

  const characters = {}

  for (let i = 0; i < first.length; i++) {
    const char = first[i]

    if (characters[char]) {
      characters[char]++
    } else {
      characters[char] = 1
    }
  }

  for (let i = 0; i < second.length; i++) {
    const char = second[i]

    if (!characters[char]) {
      return false
    } else {
      characters[char]--
    }
  }

  return true
}

// O(n) time
// O(n) space

// Store characters in the array
export function isPermutation3(first, second) {
  if (first.length !== second.length) {
    return false
  }

  const characters = Array(MAX_LENGTH).fill(0)

  for (let i = 0; i < first.length; i++) {
    const code = first[i].charCodeAt(0)
    characters[code]++
  }

  for (let i = 0; i < second.length; i++) {
    const code = second[i].charCodeAt(0)
    characters[code]--

    if (characters[code] < 0) {
      return false
    }
  }

  return true
}
