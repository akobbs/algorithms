// O(n) time | O(1) space
export function isPrime1(n) {
  if (n <= 1) {
    return false
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  }

  return true
}

// O(√n) time | O(1) space
export function isPrime2(n) {
  if (n <= 1) {
    return false
  }

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false
    }
  }

  return true
}

// O(√n) time | O(1) space
export function isPrime3(n) {
  if (n <= 1) {
    return false
  }

  if (n <= 3) {
    return true
  }

  if (n % 2 === 0 || n % 3 === 0) {
    return false
  }

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false
    }
  }

  return true
}
