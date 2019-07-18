// O(n) time | O(1) space
export default function computeMaxProfit(prices) {
  let minPrice = Infinity
  let maxProfit = 0

  for (let price of prices) {
    maxProfit = Math.max(maxProfit, price - minPrice)
    minPrice = Math.min(minPrice, price)
  }

  return maxProfit
}
