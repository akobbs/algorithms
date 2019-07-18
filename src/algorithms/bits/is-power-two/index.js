// Naive solution
// O(log n) time | O(1) space
export function isPowerOfTwo1(value) {
  if (value === 0) {
    return false
  }

  while (value % 2 === 0) {
    value = value / 2
  }

  return value === 1
}

// Properties for numbers which are powers of 2,
// is that they have one and only one bit set in
// their binary representation.
// If the number is neither zero nor a power of two,
// it will have 1 in more than one place.
// So if x is a power of 2 then x & (x-1) will be 0.

// O(1) time | O(1) space
export function isPowerOfTwo2(value) {
  if (value === 0) {
    return false
  }

  return (value & (value - 1)) === 0
}
