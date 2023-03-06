class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    let newNode = new DoublyLinkedListNode(val);
    if (this.head === null) {
      this.head = this.tail = newNode;
      return this.length++;
    } else {
      let currNode = this.head;
      newNode.next = currNode;
      currNode.prev = newNode;
      this.head = newNode;
      return this.length++;
    }
  }

  addToTail(val) {
    let newNode = new DoublyLinkedListNode(val);
    if (this.head === null) {
      this.head = this.tail = newNode;
      return this.length++;
    } else {
      let currNode = this.tail;
      newNode.prev = currNode;
      currNode.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log('NULL');
  }
}

module.exports = DoublyLinkedList;
