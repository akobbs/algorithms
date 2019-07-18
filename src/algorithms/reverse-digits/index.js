// O(n), where n is the number of digits
export default function reverse(value) {
  let result = 0
  let remaining = Math.abs(value)

  while (remaining !== 0) {
    result = result * 10 + (remaining % 10)
    remaining = Math.floor(remaining / 10)
  }

  return value < 0 ? -result : result
}
