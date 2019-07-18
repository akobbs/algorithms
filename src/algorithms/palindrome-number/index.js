import reverse from '../reverse-digits'

export function isPalindrome1(value) {
  if (value < 0) {
    return false
  }

  let number = value
  const digitCount = Math.floor(Math.log10(value)) + 1
  let v = Math.pow(10, digitCount - 1)

  for (let i = 0; i < Math.floor(digitCount / 2); i++) {
    const firstDigit = Math.floor(number / v)
    const lastDigit = number % 10

    if (firstDigit !== lastDigit) {
      return false
    }

    number = number % v
    number = Math.floor(number / 10)

    v = Math.floor(v / 100)
  }

  return true
}

export function isPalindrome2(value) {
  const getDigitCount = value => {
    let count = 0

    while (value !== 0) {
      value = Math.floor(value / 10)
      count++
    }

    return count
  }

  const digitCount = getDigitCount(value)

  let v = Math.pow(10, digitCount - 1)
  let number = value

  for (let i = 0; i < Math.floor(digitCount / 2); i++) {
    const firstDigit = Math.floor(number / v)
    const lastDigit = number % 10

    if (firstDigit !== lastDigit) {
      return false
    }

    number = number % v
    number = Math.floor(number / 10)

    v = Math.floor(v / 100)
  }

  return true
}

// reverse and compare
export function isPalindrome3(value) {
  const reversed = reverse(value)

  return value === reversed
}

// recursive
export function isPalindrome4(value) {
  const numberOfDigits = Math.floor(Math.log10(value)) + 1

  if (numberOfDigits < 2) {
    return true
  }

  const v = Math.pow(10, numberOfDigits - 1)
  const firstDigit = Math.floor(value / v)
  const lastDigit = value % 10

  if (firstDigit !== lastDigit) {
    return false
  }

  let newValue = value % v
  newValue = Math.floor(newValue / 10)

  return isPalindrome4(newValue)
}
