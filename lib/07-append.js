function append(listA, listB) {
  if (!listA) return listB
  if (!listB) return listA

  listA.next = append(listA.next, listB)
  return listA
}

function appendV2(listA, listB) {
  if (!listA) return listB
  if (!listB) return listA

  let node = listA
  while (true) {
    if (!node.next) break
    node = node.next
  }

  node.next = listB
  return listA
}

module.exports = {
  append,
  appendV2,
}
