// O(n) time, where n is the length of the shorter string
// O(1) space
export function isOneEditAway1(str1, str2) {
  if (str1.length === str2.length) {
    return hasNoMoreThanOneReplace(str1, str2)
  } else if (str1.length === str2.length - 1) {
    return hasNoMoreThanOneRemoval(str2, str1)
  } else if (str1.length - 1 === str2.length) {
    return hasNoMoreThanOneRemoval(str1, str2)
  }

  return false
}

function hasNoMoreThanOneReplace(str1, str2) {
  let hasOneReplace = false
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      if (hasOneReplace) {
        return false
      }

      hasOneReplace = true
    }
  }

  return true
}

// str1.length > str2.length
function hasNoMoreThanOneRemoval(str1, str2) {
  let oneIdx = 0
  let twoIdx = 0

  while (oneIdx < str1.length && twoIdx < str2.length) {
    if (str1[oneIdx] !== str2[twoIdx]) {
      if (oneIdx !== twoIdx) {
        return false
      }

      oneIdx++
    } else {
      oneIdx++
      twoIdx++
    }
  }

  return true
}

export function isOneEditAway2(str1, str2) {
  if (Math.abs(str1.length - str2.length) > 1) {
    return false
  }

  const oneStr = str1.length > str2.length ? str2 : str1
  const twoStr = str1.length > str2.length ? str1 : str2

  let oneIdx = 0
  let twoIdx = 0
  let hasOneEdit = false

  while (oneIdx < oneStr.length && twoIdx < twoStr.length) {
    if (oneStr[oneIdx] !== twoStr[twoIdx]) {
      if (hasOneEdit) {
        return false
      }

      if (oneStr.length === twoStr.length) {
        oneIdx++
        twoIdx++
      } else {
        twoIdx++
      }

      hasOneEdit = true
    } else {
      oneIdx++
      twoIdx++
    }
  }

  return true
}
