export function setBit(value, i) {
  return value | (1 << i)
}

export function clearBit(value, i) {
  return value & ~(1 << i)
}

export function toggleBit(value, i) {
  return value ^ (1 << i)
}

export function checkBit(value, i) {
  return (value >> i) & 1
}
