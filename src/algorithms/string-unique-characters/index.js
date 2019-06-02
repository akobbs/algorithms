// ASCII uses 7 bits to represent a character. We can represent 128 characters maximum.
const MAX_LENGTH = 128

// O(n) time, where n is the size of the input string and <= 128
// O(n) space, where n is the size of the input string and <= 128

// Object to store characters
export function isUniqueCharacters1(str) {
  if (str.length > MAX_LENGTH) {
    return false
  }

  const characters = {}

  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i)

    if (characters[char]) {
      return false
    }

    characters[char] = true
  }

  return true
}

// O(n) time, where n is the size of the input string and <= 128
// O(n) space, where n is the size of the input string and <= 128

// Array to store characters
export function isUniqueCharacters2(str) {
  if (str.length > MAX_LENGTH) {
    return false
  }

  const characters = Array(MAX_LENGTH).fill(false)

  for (let i = 0; i < str.length; i++) {
    const code = str[i].charCodeAt(0)

    if (characters[code]) {
      return false
    }

    characters[code] = true
  }

  return true
}

// O(n^2) time, where n is the size of the input string and <= 128
// O(1) space

// Brute Force
export function isUniqueCharacters3(str) {
  if (str.length > MAX_LENGTH) {
    return false
  }

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false
      }
    }
  }

  return true
}

// O(n*log(n)) time, where n is the size of the input string and <= 128
// O(n) space, where n is the size of the input string and <= 128

// Sort and then check for duplication
export function isUniqueCharacters4(str) {
  if (str.length > MAX_LENGTH) {
    return false
  }

  const characters = str.split('').sort()

  for (let i = 0; i < characters.length - 1; i++) {
    if (characters[i] === characters[i + 1]) {
      return false
    }
  }

  return true
}
