// O(n) time | O(1) space
export default function deleteDuplicates(arr) {
  if (arr.length === 0) {
    return 0
  }

  let writeIdx = 1

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] !== arr[i]) {
      arr[writeIdx] = arr[i]
      writeIdx++
    }
  }

  arr.splice(writeIdx)

  return writeIdx
}
