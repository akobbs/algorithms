// O(n^2) time | O(1) space
export function rotateMatrix(matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return false
  }

  const n = matrix.length

  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = i; j < n - 1 - i; j++) {
      const top = matrix[i][j]

      // top = left
      matrix[i][j] = matrix[n - j - 1][i]

      // left = bottom
      matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1]

      // bottom = right
      matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1]

      // right = top
      matrix[j][n - i - 1] = top
    }
  }

  return true
}
