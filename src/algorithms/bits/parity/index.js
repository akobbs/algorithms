// O(n) time | O(1) space
export function parity1(value) {
  let result = 0

  while (value !== 0) {
    result ^= value & 1
    value >>>= 1
  }

  return result
}

// Brian Kernighan’s Algorithm
// O(k) time, where k is the number of bits set to 1
// O(1) space
export function parity2(value) {
  let result = 0

  while (value !== 0) {
    result ^= 1
    value = value & (value - 1)
  }

  return result
}

// lookup table
const computedParity = {
  0b0000: 0,
  0b0001: 1,
  0b0010: 1,
  0b0011: 0,
  0b0100: 1,
  0b0101: 0,
  0b0110: 0,
  0b0111: 1,
  0b1000: 1,
  0b1001: 0,
  0b1010: 0,
  0b1011: 1,
  0b1100: 0,
  0b1101: 1,
  0b1110: 1,
  0b1111: 0,
}

export function parity3(value) {
  const PART_SIZE = 4
  const BIT_NUMBER = 32

  const mask = 0b1111

  let result = 0

  for (let i = 0; i < BIT_NUMBER / PART_SIZE; i++) {
    result = result ^ computedParity[(value >>> (i * PART_SIZE)) & mask]
  }

  return result
}
