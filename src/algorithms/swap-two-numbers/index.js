//
// With temporary variable:
//

export function swap1(x, y) {
  const temp = x
  x = y
  y = temp

  return {
    x,
    y,
  }
}

//
// Solutions without temporary variable:
//

// Using arithmetic operators
// Problem: may cause arithmetic overflow
export function swap2(x, y) {
  x = x + y
  y = x - y
  x = x - y

  return {
    x,
    y,
  }
}

// Using XOR bitwise operator
export function swap3(x, y) {
  x = x ^ y // 1. x = x ^ y
  y = x ^ y // 2. y = x ^ y ^ y = x ^ 0 = x
  x = x ^ y // 3. x = x ^ y ^ x = x ^ x ^ y = 0 ^ y = y

  return {
    x,
    y,
  }
}
