export class Node {
  constructor(value, children = []) {
    this.value = value
    this.children = children
  }
}

export default function breadthFirstSearch(rootNode, callback = () => {}) {
  const queue = [rootNode]
  const visited = Object.create(null)

  while (queue.length > 0) {
    const node = queue.shift()

    // queue could contain same node twice
    if (!visited[node.value]) {
      callback(node.value)
      visited[node.value] = true
    }

    node.children.forEach(child => {
      if (!visited[child.value]) {
        queue.push(child)
      }
    })
  }
}
