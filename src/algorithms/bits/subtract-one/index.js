// To subtract 1 from a number x (say 0011001000),
// flip all the bits after the rightmost 1 bit (we get 0011001111).
// Finally, flip the rightmost 1 bit also (we get 0011000111) to get the answer.
export default function subtractOne(value) {
  if (value === 0) {
    return -1
  }

  let m = 1
  while ((value & m) === 0) {
    value ^= m
    m <<= 1
  }

  value ^= m

  return value
}
