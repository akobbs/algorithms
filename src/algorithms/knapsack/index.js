// O(n * capacity) time
// O(n * capacity) space
export default function knapsackProblem(items, capacity) {
  const values = Array(items.length + 1).fill(undefined)
  for (let i = 0; i < values.length; i++) {
    values[i] = Array(capacity + 1).fill(0)
  }

  for (let i = 1; i < items.length + 1; i++) {
    const currentWeight = items[i - 1][1]
    const currentValue = items[i - 1][0]

    for (let weight = 1; weight < capacity + 1; weight++) {
      if (currentWeight > weight) {
        values[i][weight] = values[i - 1][weight]
      } else {
        values[i][weight] = Math.max(
          values[i - 1][weight],
          values[i - 1][weight - currentWeight] + currentValue,
        )
      }
    }
  }

  console.log(values)

  return [values[items.length][capacity], getSelectedItems(values, items)]
}

function getSelectedItems(values, items) {
  const selectedItems = []
  let weightIdx = values[0].length - 1
  let itemIdx = items.length

  while (itemIdx > 0 && weightIdx > 0) {
    if (values[itemIdx][weightIdx] === values[itemIdx - 1][weightIdx]) {
      itemIdx--
    } else {
      selectedItems.push(items[itemIdx - 1])
      weightIdx -= items[itemIdx - 1][1]
      itemIdx--
    }
  }

  return selectedItems
}
