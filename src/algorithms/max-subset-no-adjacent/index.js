// O(n) time | O(n) space
export function maxSubsetNoAdjacent1(array) {
  if (array.length === 0) {
    return 0
  }

  if (array.length === 1) {
    return array[0]
  }

  const maxSums = Array(array.length).fill(0)
  maxSums[0] = array[0]
  maxSums[1] = Math.max(array[0], array[1])

  for (let i = 2; i < array.length; i++) {
    maxSums[i] = Math.max(maxSums[i - 2] + array[i], maxSums[i - 1])
  }

  return maxSums[maxSums.length - 1]
}

// O(n) time | O(1) space
export function maxSubsetNoAdjacent2(array) {
  if (array.length === 0) {
    return 0
  }

  if (array.length === 1) {
    return array[0]
  }

  let second = array[0]
  let first = Math.max(array[0], array[1])

  for (let i = 2; i < array.length; i++) {
    const current = Math.max(second + array[i], first)
    second = first
    first = current
  }

  return first
}
