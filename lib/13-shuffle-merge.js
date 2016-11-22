/*
https://www.codewars.com/kata/linked-lists-shuffle-merge

Linked Lists - Shuffle Merge

Write a ShuffleMerge() function that takes two lists and merges their nodes together to make one
list, taking nodes alternately between the two lists. So ShuffleMerge() with 1 -> 2 -> 3 -> null
and 7 -> 13 -> 1 -> null should yield 1 -> 7 -> 2 -> 13 -> 3 -> 1 -> null. If either list runs out,
all the nodes should be taken from the other list. ShuffleMerge() should return the new list. The
solution depends on being able to move nodes to the end of a list.

    var first = 3 -> 2 -> 8 -> null
    var second = 5 -> 6 -> 1 -> 9 -> 11 -> null
    shuffleMerge(first, second) === 3 -> 5 -> 2 -> 6 -> 8 -> 1 -> 9 -> 11 -> null

If one of the argument lists is null, the returned list should be the other linked list (even if it
is also null). No errors need to be thrown in ShuffleMerge().
*/

const { Node } = require('./00-utils')

/*
 * The recursion version
 */
function shuffleMerge(first, second) {
  if (!first || !second) return first || second

  const list = new Node(first.data, new Node(second.data))
  list.next.next = shuffleMerge(first.next, second.next)
  return list
}

/*
 * The improved recursion version, switch the arguments to shuffle
 */
function shuffleMergeV2(first, second) {
  if (!first || !second) return first || second
  return new Node(first.data, shuffleMerge(second, first.next))
}

/*
 * The loop version
 */
function shuffleMergeV3(first, second) {
  if (!first || !second) return first || second

  const list = new Node()
  let points = [first, second]
  let idx = 0

  while (points[0] || points[1]) {
    if (points[idx] !== null) {
      append(list, points[idx].data)
      points[idx] = points[idx].next
    }
    idx = idx ? 0 : 1
  }

  return list
}

function append(list, data) {
  if (list.data === null) {
    list.data = data
    list.tail = list
  } else {
    list.tail.next = new Node(data)
    list.tail = list.tail.next
  }
}

module.exports = {
  shuffleMerge,
  shuffleMergeV2,
  shuffleMergeV3,
}
