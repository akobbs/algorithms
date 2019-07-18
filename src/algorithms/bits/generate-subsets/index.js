export function generateSubsets(values) {
  const n = values.length

  const subsets = []

  for (let i = 0; i < Math.pow(2, n); i++) {
    const subset = []
    for (let j = 0; j < n; j++) {
      if (isBitSet(i, j)) {
        subset.push(values[j])
      }
    }

    subsets.push(subset)
  }

  return subsets
}

function isBitSet(value, index) {
  const result = value & (1 << index)

  return result === 0 ? false : true
}
