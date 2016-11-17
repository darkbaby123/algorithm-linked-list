const { Node } = require('./00-utils')
const { push } = require('./01-push-and-build-one-two-three')

function moveNode(source, dest) {
  if (source === null || dest === null || source.isEmpty()) {
    throw new Error('invalid arguments')
  }

  pushInPlace(dest, source.data)

  if (source.next) {
    source.data = source.next.data
    source.next = source.next.next
  } else {
    source.data = null
  }
}

/*
 * Push the data to the front of the list in-place
 *
 * It solves the problem by simply insert a new node between the 1st node and the rest.
 */
function pushInPlace(head, data) {
  const origData = head.data
  head.data = data
  if (head.next) head.next = push(head.next, origData)
}

/*
 * Push the data to the front of the list in-place
 *
 * This is the first idea came to my mind. It passes the data to the 1st node, then passes the 1st
 * node's data to the 2nd node, ang go on.
 *
 * This is a recursion version. It can also be implemented with loop version. But I'll leave it
 * since neither of them are the best way.
 */
function pushInPlaceV2(head, data) {
  if (!head) return new Node(data)

  if (!head.isEmpty()) head.next = pushInPlaceV2(head.next, head.data)
  head.data = data
  return head
}

module.exports = {
  moveNode,
  pushInPlace,
  pushInPlaceV2,
}
