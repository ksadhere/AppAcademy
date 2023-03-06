// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(head = null) {
    this.head = head;
  }

  addToTail(val) {
    let newNode = new SinglyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      return this.head;
    }

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }

    curr.next = newNode;
    return this.head;
  }

  listLength() {
    // Returns the length of the list
    let length = 0;
    let curr = this.head;

    while (curr) {
      length += 1;
      curr = curr.next;
    }

    return length;
    // Implement in O(n) and in O(1) time complexity
  }

  sumOfNodes() {
    // Returns the sum of the values of all the nodes
    let sum = 0;
    let curr = this.head;

    while (curr) {
      sum += curr.value;
      curr = curr.next;
    }

    return sum;
    // Write your hypothesis on the time complexity of this method here O(n)
  }

  averageValue() {
    // Returns the average value of all the nodes
    if (this.listLength() === 0) {
      return null;
    }
    return this.sumOfNodes() / this.listLength();
    // Write your hypothesis on the time complexity of this method here O(n)
  }

  findNthNode(n) {
    // Returns the node at the nth index from the head
    if (n < 0) {
      return null;
    }
    let curr = this.head;

    while (curr && n > 0) {
      curr = curr.next;
      n -= 1;
    }
    if (curr) {
      return curr;
    } else {
      return null;
    }
    // Write your hypothesis on the time complexity of this method here O(n)
  }

  findMid() {
    // Returns the middle node
    // Implement this as a singly linked list then as a doubly linked list
    // How do the implementation for singly and doubly vary if at all?
    if (!this.head) {
      return null;
    }
    let slow = this.head;
    let fast = this.head;

    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
    // Write your hypothesis on the time complexity of this method here O(n)
  }

  reverse() {
    // Returns a new reversed version of the linked list
    if (!this.head) {
      return null;
    }
    let newLinkedList = new SinglyLinkedList();
    let curr = this.head;

    while (curr) {
      let newNode = new SinglyLinkedNode(curr.value);
      newNode.next = newLinkedList.head;
      newLinkedList.head = newNode;
      curr = curr.next;
    }

    return newLinkedList;

    // Write your hypothesis on the time complexity of this method here O(n)
  }

  reverseInPlace() {
    // Reverses the linked list in-place
    if (!this.head) {
      return null;
    }
    let pre = null;
    let curr = this.head;

    while (curr) {
      let nextNode = curr.next;
      curr.next = pre;
      pre = curr;
      curr = nextNode;
    }

    this.head = pre;
    // Write your hypothesis on the time complexity of this method here O(n)
  }
}

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
  }

  addToTail(val) {
    let newNode = new DoublyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this.head;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;

    return this.head;
  }

  findMid() {
    // Returns the middle node
    // Implement this as a singly linked list then as a doubly linked list
    // How do the implementation for singly and doubly vary if at all?
    if (!this.head) {
      return null;
    }
    if (!this.head.next) {
      return this.head;
    }

    let start = this.head;
    let end = this.tail;

    while (start.next !== end && start !== end) {
      start = start.next;
      end = end.prev;
    }

    return start;
    // Write your hypothesis on the time complexity of this method here
  }

  reverse() {
    // Returns a new reversed version of the linked list
    if (!this.head) {
      return;
    }

    let newLinkedList = new DoublyLinkedList();
    let curr = this.head;

    while (curr) {
      let newNode = new DoublyLinkedNode(curr.value);
      if (!newLinkedList.head) {
        newLinkedList.head = newNode;
        newLinkedList.tail = newNode;
      } else {
        newLinkedList.head.prev = newNode;
        newNode.next = newLinkedList.head;
        newLinkedList.head = newNode;
      }
      curr = curr.next;
    }

    return newLinkedList;
  }

  reverseInPlace() {
    // Reverses the linked list in-place
    if (!this.head) {
      return null;
    }
    if (!this.head.next) {
      return;
    }
    let curr = this.head;
    while (curr.next) {
      let preNode = curr.prev;
      curr.prev = curr.next;
      curr.next = preNode;
      curr = curr.prev;
    }
    curr.next = curr.prev;
    curr.prev = null;
    this.tail = this.head;
    this.head = curr;

    // Write your hypothesis on the time complexity of this method here
  }
}

module.exports = {
  SinglyLinkedNode,
  SinglyLinkedList,
  DoublyLinkedNode,
  DoublyLinkedList,
};
