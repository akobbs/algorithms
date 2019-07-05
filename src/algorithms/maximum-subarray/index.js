export function maxSubarraySum1(arr) {
  const sumArr = [...arr]

  for (let i = 1; i < sumArr.length; i++) {
    if (sumArr[i - 1] > 0) {
      sumArr[i] += sumArr[i - 1]
    }
  }

  console.log(sumArr)

  return Math.max(...sumArr)
}

export function maxSubarraySum2(arr) {
  let maxEndingHere = arr[0]
  let maxSoFar = arr[0]

  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(maxEndingHere + arr[i], arr[i])
    maxSoFar = Math.max(maxEndingHere, maxSoFar)
  }

  return maxSoFar
}
