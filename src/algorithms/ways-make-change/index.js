// Recursive
export function getNumberOfWaysToMakeChange1(n, coins) {
  return numberOfWaysToMakeChangeHelper1(n, coins, coins.length - 1)
}

export function numberOfWaysToMakeChangeHelper1(n, coins, index) {
  if (n === 0) {
    return 1
  }

  if (n < 0 || index < 0) {
    return 0
  }

  return (
    numberOfWaysToMakeChangeHelper1(n, coins, index - 1) +
    numberOfWaysToMakeChangeHelper1(n - coins[index], coins, index)
  )
}

// Recursive with memoization
export function getNumberOfWaysToMakeChange2(n, coins) {
  return numberOfWaysToMakeChangeHelper2(n, coins, coins.length - 1, {})
}

export function numberOfWaysToMakeChangeHelper2(n, coins, index, cache) {
  if (n === 0) {
    return 1
  }

  if (n < 0 || index < 0) {
    return 0
  }

  const keyWithout = `${n}-${index - 1}`
  const keyWith = `${n - coins[index]}-${index}`

  if (!cache[keyWithout]) {
    cache[keyWithout] = numberOfWaysToMakeChangeHelper1(
      n,
      coins,
      index - 1,
      cache,
    )
  }

  const numberWithout = cache[keyWithout]

  if (!cache[keyWith]) {
    cache[keyWith] = numberOfWaysToMakeChangeHelper1(
      n - coins[index],
      coins,
      index,
      cache,
    )
  }

  const numberWith = cache[keyWith]

  console.log(cache)

  return numberWith + numberWithout
}

// Dynamic programming with 2-d array
export function getNumberOfWaysToMakeChange3(n, coins) {
  const numberOfWays = Array(coins.length + 1).fill(undefined)
  for (let i = 0; i < coins.length + 1; i++) {
    numberOfWays[i] = Array(n + 1).fill(0)
  }

  numberOfWays[0][0] = 1

  for (let coinIdx = 1; coinIdx <= coins.length; coinIdx++) {
    numberOfWays[coinIdx][0] = 1
  }

  for (let amount = 1; amount <= n; amount++) {
    for (let coinIdx = 1; coinIdx <= coins.length; coinIdx++) {
      const coin = coins[coinIdx - 1]
      const withoutCoin = numberOfWays[coinIdx - 1][amount]
      const withCoin = amount >= coin ? numberOfWays[coinIdx][amount - coin] : 0

      numberOfWays[coinIdx][amount] = withCoin + withoutCoin
    }
  }

  return numberOfWays[coins.length][n]
}

// Dynamic programming
export function getNumberOfWaysToMakeChange4(n, coins) {
  const ways = Array(n + 1).fill(0)
  ways[0] = 1

  for (const coin of coins) {
    for (let amount = 1; amount < n + 1; amount++) {
      if (coin <= amount) {
        ways[amount] += ways[amount - coin]
      }
    }
  }

  return ways[n]
}
