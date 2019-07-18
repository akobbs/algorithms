// O(n * log (log n)) time | O(n) space
export default function generatePrimes(n) {
  const arr = Array(n + 1).fill(true)

  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false
      }
    }
  }

  const primes = arr.reduce((primes, value, index) => {
    if (index > 1 && value) {
      return [...primes, index]
    }

    return primes
  }, [])

  return primes
}
