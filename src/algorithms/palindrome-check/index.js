// O(n^2) time (string concatenation is a weak place)
// O(n) space
export function isPalindrome1(str) {
  let reversedStr = ''

  for (let i = str.length - 1; i >= 0; i--) {
    // New string is created each time
    reversedStr += str[i]
  }

  return str === reversedStr
}

// O(n) time
// O(n) space
export function isPalindrome2(str) {
  let reversedCharacters = []

  for (let i = str.length - 1; i >= 0; i--) {
    reversedCharacters.push(str[i])
  }

  return str === reversedCharacters.join('')
}

// O(n) time
// O(n) space (call stack of the recursion) or O(1) space with tail recursion support
export function isPalindrome3(str, left = 0) {
  const right = str.length - 1 - left

  if (left >= right) {
    return true
  }

  if (str[left] !== str[right]) {
    return false
  }

  return isPalindrome3(str, left + 1)
}

// O(n) time
// O(1) space
export function isPalindrome4(str) {
  for (let i = 0; i < str.length / 2; i++) {
    let rightIndex = str.length - 1 - i

    if (str[i] !== str[rightIndex]) {
      return false
    }
  }

  return true
}

// O(n) time
// O(1) space
export function isPalindrome5(str) {
  let leftIdx = 0
  let rightIdx = str.length - 1

  while (leftIdx < rightIdx) {
    if (str[leftIdx] !== str[rightIdx]) {
      return false
    }

    leftIdx++
    rightIdx--
  }

  return true
}

// O(n) time
// O(n) space
export function isPalindrome6(str) {
  const leftPart = str.substring(0, str.length / 2)
  const rightPart = str.substring(Math.ceil(str.length / 2), str.length)

  return (
    leftPart ===
    rightPart
      .split('')
      .reverse()
      .join('')
  )
}
