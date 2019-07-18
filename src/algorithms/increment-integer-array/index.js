export function incrementIntegerArray(valueArr) {
  valueArr[valueArr.length - 1] += 1

  let currentIdx = valueArr.length - 1
  while (currentIdx > 0 && valueArr[currentIdx] === 10) {
    valueArr[currentIdx] = 0
    valueArr[currentIdx - 1] += 1
    currentIdx--
  }

  if (valueArr[0] === 10) {
    valueArr[0] = 0
    valueArr.unshift(1)
  }

  return valueArr
}
