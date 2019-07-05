// string concatenation
export function compress1(str) {
  let result = ''

  let count = 0
  for (let i = 0; i < str.length; i++) {
    count++

    if (i + 1 >= str.length || str[i] !== str[i + 1]) {
      result += str[i] + count
      count = 0
    }
  }

  return result.length < str.length ? result : str
}

// efficient string concatenation
export function compress2(str) {
  const resultArr = []

  let count = 0
  for (let i = 0; i < str.length; i++) {
    count++

    if (i + 1 >= str.length || str[i] !== str[i + 1]) {
      resultArr.push(str[i])
      resultArr.push(String(count))
      count = 0
    }
  }

  const result = resultArr.join('')
  return result.length < str.length ? result : str
}

// check compressed length before building compressed string
export function compress3(str) {
  const compressedLength = getLengthOfTheCompressedString(str)

  if (compressedLength >= str.length) {
    return str
  }

  const resultArr = []

  let count = 0
  for (let i = 0; i < str.length; i++) {
    count++

    if (i + 1 >= str.length || str[i] !== str[i + 1]) {
      resultArr.push(str[i])
      resultArr.push(String(count))
      count = 0
    }
  }

  return resultArr.join('')
}

export function getLengthOfTheCompressedString(str) {
  let compressedLength = 0
  let letterCount = 0

  for (let i = 0; i < str.length; i++) {
    letterCount++

    if (i + 1 >= str.length || str[i] !== str[i + 1]) {
      compressedLength += 1
      compressedLength += String(letterCount).length
      letterCount = 0
    }
  }

  return compressedLength
}
