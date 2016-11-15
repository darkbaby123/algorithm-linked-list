/*
https://www.codewars.com/kata/linked-lists-push-and-buildonetwothree/javascript

Linked Lists - Push & BuildOneTwoThree

Write push() and buildOneTwoThree() functions to easily update and initialize linked lists. Try to
use the push() function within your buildOneTwoThree() function.

Here's an example of push() usage:

    var chained = null
    chained = push(chained, 3)
    chained = push(chained, 2)
    chained = push(chained, 1)
    push(chained, 8) === 8 -> 1 -> 2 -> 3 -> null

The push function accepts head and data parameters, where head is either a node object or
null/None/nil. Your push implementation should be able to create a new linked list/node when head is
null/None/nil.

The buildOneTwoThree function should create and return a linked list with three nodes:
1 -> 2 -> 3 -> null
*/

const { Node } = require('./00-utils')

function push(head, data) {
  return new Node(data, head)
}

function buildOneTwoThree() {
  return buildNodes([1, 2, 3])
}

/*
 * The recursion version
 */
function buildNodes(array) {
  if (!array || !array.length) return null
  const data = array.shift()
  return push(buildNodes(array), data)
}

/*
 * The loop version
 */
function buildNodesV2(array) {
  let list = null
  for (const data of array || []) {
    list = push(list, data)
  }
  return list
}

/*
 * The loop version, one-liner
 */
function buildNodesV3(array) {
  return (array || []).reduceRight(push, null)
}

module.exports = {
  push,
  buildOneTwoThree,
  buildNodes,
  buildNodesV2,
  buildNodesV3,
}
