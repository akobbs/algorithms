// O(n) time
export function countOneBits1(value) {
  let count = 0

  while (value !== 0) {
    count += value & 1
    value >>>= 1
  }

  return count
}

// Brian Kernighan’s Algorithm
// O(k) time, where k is the number of bits set to 1
export function countOneBits2(value) {
  let count = 0

  while (value !== 0) {
    count += 1
    value = value & (value - 1)
  }

  return count
}

// https://stackoverflow.com/questions/9939760/how-do-i-convert-an-integer-to-binary-in-javascript
function toBinary(value) {
  return (value >>> 0).toString(2)
}
