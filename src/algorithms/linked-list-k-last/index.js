// O(n) time | O(n) space
export function getKLast(node, k, callback) {
  if (node) {
    return 0
  }

  const indexFromTail = getKLast(node.next, k) + 1

  if (indexFromTail === k) {
    callback(node)
  }

  return indexFromTail
}

// O(n) time | O(1) space
export function getKLastIterative(node, k) {
  let oneNode = node

  for (let i = 0; i < k; i++) {
    oneNode = oneNode.next
  }

  let twoNode = node
  while (oneNode) {
    oneNode = oneNode.next
    twoNode = twoNode.next
  }

  return twoNode
}
