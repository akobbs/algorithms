import {swapBits2} from '../swap-bits'

const BIT_NUMBER = 32

export function reverse1(value) {
  for (let i = 0; i < BIT_NUMBER / 2; i++) {
    value = swapBits2(value, i, BIT_NUMBER - i - 1)
  }

  return value
}

export function reverse2(value) {
  let result = 0
  let position = BIT_NUMBER - 1

  while (value !== 0 && position >= 0) {
    const bitValue = value & 1

    if (bitValue === 1) {
      result = result | (1 << position)
    }

    position--
    value >>>= 1
  }

  return result
}

const computed = {
  0b0000: 0b0000,
  0b0001: 0b1000,
  0b0010: 0b0100,
  0b0011: 0b1100,
  0b0100: 0b0010,
  0b0101: 0b1010,
  0b0110: 0b0110,
  0b0111: 0b1110,
  0b1000: 0b0001,
  0b1001: 0b1001,
  0b1010: 0b0101,
  0b1011: 0b1101,
  0b1100: 0b0011,
  0b1101: 0b1011,
  0b1110: 0b0111,
  0b1111: 0b1111,
}

// lookup table solution
export function reverse3(value) {
  const BIT_COUNT = 32
  const PART_SIZE = 4

  const PART_COUNT = BIT_COUNT / PART_SIZE

  const mask = 0b1111

  let result = 0

  for (let i = 0; i < PART_COUNT; i++) {
    const part = (value >>> (i * PART_SIZE)) & mask
    const reversedPart = computed[part]

    result = (reversedPart << ((PART_COUNT - i - 1) * PART_SIZE)) | result
  }

  return result
}

// TODO: add solution with memoization
