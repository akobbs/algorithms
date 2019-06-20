export default function levenshteinDistance(str1, str2) {
  const edits = Array(str2.length + 1)
    .fill(null)
    .map(() => Array(str1.length + 1).fill(0))

  for (let i = 0; i < str2.length + 1; i++) {
    edits[i][0] = i
  }

  for (let j = 0; j < str1.length + 1; j++) {
    edits[0][j] = j
  }

  for (let i = 1; i < str2.length + 1; i++) {
    for (let j = 1; j < str1.length + 1; j++) {
      if (str2[i - 1] === str1[j - 1]) {
        edits[i][j] = edits[i - 1][j - 1]
      } else {
        edits[i][j] =
          1 + Math.min(edits[i - 1][j], edits[i - 1][j - 1], edits[i][j - 1])
      }
    }
  }

  return edits[str2.length][str1.length]
}
