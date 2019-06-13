export class Node {
  constructor(value, children = []) {
    this.value = value
    this.children = children
  }
}

// O(n) time
// Recursive
export function depthFirstSearch1(
  node,
  callback,
  visited = Object.create(null),
) {
  callback(node.value)
  visited[node.value] = true

  node.children.forEach(child => {
    if (!visited[child.value]) {
      depthFirstSearch1(child, callback, visited)
    }
  })
}

// O(n) time
// Iterative
export function depthFirstSearch2(node, callback) {
  const visited = Object.create(null)

  const stack = [node]

  while (stack.length > 0) {
    const node = stack.pop()

    // stack could contain same node twice
    if (!visited[node.value]) {
      callback(node.value)
      visited[node.value] = true
    }

    for (let i = node.children.length - 1; i >= 0; i--) {
      const child = node.children[i]
      if (!visited[child.value]) {
        stack.push(child)
      }
    }
  }
}
