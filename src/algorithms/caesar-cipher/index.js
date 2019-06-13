// using own alphabet
export function encryptor1(str, key) {
  const alphabet = 'abcdefghijklmnopqrstuvwzyz'
  const result = Array(alphabet.length).fill('')
  key = key % alphabet.length

  for (let i = 0; i < str.length; i++) {
    const letter = str[i]
    const letterIdx = alphabet.indexOf(letter)

    if (letterIdx !== -1) {
      const resultIdx = (letterIdx + key) % alphabet.length
      result[i] = alphabet[resultIdx]
    } else {
      result[i] = '?'
    }
  }

  return result.join('')
}

// without own alphabet
export function encryptor2(str, key) {
  const aCode = 'a'.charCodeAt(0)
  const zCode = 'z'.charCodeAt(0)

  const alphabetLength = zCode - aCode + 1

  key = key % alphabetLength

  const result = Array(alphabetLength).fill('')
  for (let i = 0; i < str.length; i++) {
    const letter = letter[i]
    const letterCode = letter.charCodeAt(0)

    if (letterCode < aCode || letterCode > zCode) {
      result[i] = '?'
    } else {
      const resultIdx = (letterCode + key) % alphabetLength
      result[i] = String.fromCharCode(resultIdx)
    }
  }

  return result
}
