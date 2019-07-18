// O(n) time | O(1) space
export function evenOddReorder1(arr) {
  let headIdx = 0
  let tailIdx = arr.length - 1

  while (headIdx < tailIdx) {
    while (headIdx < tailIdx && arr[headIdx] % 2 === 0) {
      headIdx++
    }

    while (tailIdx > headIdx && arr[tailIdx] % 2 !== 0) {
      tailIdx--
    }

    if (headIdx < tailIdx) {
      swap(arr, headIdx, tailIdx)
    }
  }

  return arr
}

// O(n) time | O(1) space
export function evenOddReorder2(arr) {
  let headIdx = 0
  let tailIdx = arr.length - 1

  while (headIdx < tailIdx) {
    if (arr[headIdx] % 2 === 0) {
      headIdx++
    } else {
      swap(arr, headIdx, tailIdx)
      tailIdx--
    }
  }

  return arr
}

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
