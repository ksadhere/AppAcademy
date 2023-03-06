const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here
/********************************LinkedList Test*******************************/
// *********** Linked List: addToHead ***********
let linkedHeadAdd = new LinkedList();

startTime1 = Date.now();
for (let i = 0; i < 10000; i++) {
  linkedHeadAdd.addToHead(i);
}
endTime1 = Date.now();
console.log(`Linked List - addToHead: ${endTime1 - startTime1}`);

// *********** Linked List: addToTail ***********
let linkedTailAdd = new LinkedList();

startTime2 = Date.now();
for (let i = 0; i < 10000; i++) {
  linkedTailAdd.addToTail(i);
}
endTime2 = Date.now();
console.log(`Linked List - addToTail: ${endTime2 - startTime2}`);

/***************************DoublyLinkedList Test******************************/
// *********** Doubly Linked List: addToHead ***********
let doublylinkedHeadAdd = new DoublyLinkedList();
startTime3 = Date.now();
for (let i = 0; i < 10000; i++) {
  doublylinkedHeadAdd.addToHead(i);
}
endTime3 = Date.now();
console.log(`Doubly Linked List - addToHead: ${endTime3 - startTime3}`);

// *********** Doubly Linked List: addToTail ***********
let doublylinkedTailAdd = new DoublyLinkedList();
startTime4 = Date.now();
for (let i = 0; i < 10000; i++) {
  doublylinkedTailAdd.addToTail(i);
}
endTime4 = Date.now();
console.log(`Doubly Linked List - addToTail: ${endTime4 - startTime4}`);

/******************************** RESULT **********************************
 * # Adding 10,000 Numbers #
 * Linked List - addToHead: 5ms
 * Linked List - addToTail: 484ms
 * Doubly Linked List - addToHead: 10ms
 * Doubly Linked List - addToTail: 13ms
 *
 * # Adding 100,000 Numbers #
 * Linked List - addToHead: 75
 * Linked List - addToTail: 31479
 * Doubly Linked List - addToHead: 108
 * Doubly Linked List - addToTail: 94
 *************************************************************************/
