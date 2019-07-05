// O(n) time | O(n) space
export function removeDuplications1(node) {
  const set = Object.create(null)

  let current = node
  let prev = null
  while (current) {
    if (set[current.value]) {
      prev.next = current.next
    } else {
      set[current.value] = true
      prev = current
    }

    current = current.next
  }
}

// O(n^2) time | O(1) space
export function removeDuplications2(node) {
  let current = node
  while (current) {
    let runner = current

    while (runner.next) {
      if (runner.next.value === current) {
        runner.next = runner.next.next
      } else {
        runner = runner.next
      }
    }

    current = current.next
  }
}
