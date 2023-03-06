// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    // There are bugs in this method! Fix them!!!
    // Write your hypothesis on the time complexity of this method here O(1)

    // Add node of val to head of linked list
    let newNode = new DoublyLinkedNode(val);

    if (this.length > 0) {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  addToTail(val) {
    // Add node of val to tail of linked list
    let newNode = new DoublyLinkedNode(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length += 1;

    // Write your hypothesis on the time complexity of this method here O(1)
  }

  removeFromHead() {
    // Remove node at head
    if (this.length === 0) {
      return;
    }
    let removedNode = this.head;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.head.next.prev = null;
      this.head = this.head.next;
    }
    this.length -= 1;
    return removedNode.value;
    // Write your hypothesis on the time complexity of this method here O(1)
  }

  removeFromTail() {
    // Remove node at tail
    if (this.length === 0) {
      return;
    }
    let removedNode = this.tail;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    } else {
      let lastNode = this.tail.prev;
      lastNode.next = null;
      this.tail = lastNode;
    }
    this.length -= 1;
    return removedNode.value;
    // Write your hypothesis on the time complexity of this method here O(1)
  }

  peekAtHead() {
    // Return value of head node
    if (this.length === 0) {
      return;
    }

    return this.head.value;
    // Write your hypothesis on the time complexity of this method here O(1)
  }

  peekAtTail() {
    // Return value of tail node
    if (this.length === 0) {
      return;
    }

    return this.tail.value;
    // Write your hypothesis on the time complexity of this method here O(1)
  }
}

module.exports = {
  DoublyLinkedList,
  DoublyLinkedNode,
};
