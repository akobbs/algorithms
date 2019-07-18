// doesn't remove last node
export function deleteNode(node) {
  if (node == null || !node.next) {
    return false
  }

  node.value = node.next.value
  node.next = node.next.next

  return true
}
