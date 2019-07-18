// O(1) time | O(1) space
export function swapBits1(value, i, j) {
  // get i-th and j-th bit values
  const bit1 = (value >> i) & 1
  const bit2 = (value >> j) & 1

  let x = bit1 ^ bit2
  x = (x << i) | (x << j)

  return value ^ x
}

// O(1) time | O(1) space
export function swapBits2(value, i, j) {
  // get i-th and j-th bit values
  const bit1 = (value >> i) & 1
  const bit2 = (value >> j) & 1

  // change if only bits are not equal
  if (bit1 !== bit2) {
    const mask = (1 << i) | (1 << j)
    value = value ^ mask
  }

  return value
}
