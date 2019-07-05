export function minCoinChange1(n, coins) {
  const numberOfCoins = Array(n + 1).fill(Infinity)
  numberOfCoins[0] = 0

  for (const coin of coins) {
    for (let amount = 0; amount < numberOfCoins.length; amount++) {
      if (amount >= coin) {
        numberOfCoins[amount] = Math.min(
          1 + numberOfCoins[amount - coin],
          numberOfCoins[amount],
        )
      }
    }
  }

  return numberOfCoins[n] !== Infinity ? numberOfCoins[n] : -1
}

export function minCoinChange2(n, coins) {
  if (n === 0) {
    return 0
  }

  let minNumber = Infinity
  for (const coin of coins) {
    if (coin <= n) {
      minNumber = Math.min(minNumber, 1 + minCoinChange2(n - coin, coins))
    }
  }

  return minNumber !== Infinity ? minNumber : -1
}

export function minCoinChange3(n, coins, memo = {}) {
  if (n === 0) {
    return 0
  }

  if (memo[n]) {
    return memo[n]
  }

  let minNumber = Infinity
  for (const coin of coins) {
    if (coin <= n) {
      minNumber = Math.min(minNumber, 1 + minCoinChange3(n - coin, coins, memo))
    }
  }

  memo[n] = minNumber

  console.log(memo)

  return minNumber
}
