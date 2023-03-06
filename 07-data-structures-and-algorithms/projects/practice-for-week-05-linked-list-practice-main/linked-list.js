class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    // Your code here
    const node = new LinkedListNode(val);
    if (!this.head) {
      this.head = node;
    } else {
      const current = this.head;
      this.head = node;
      this.head.next = current;
    }
    this.length++;
  }

  addToTail(val) {
    // Your code here
    let lastNode = new LinkedListNode(val, null);
    if (this.head === null) {
      this.head = lastNode;
      return this.length++;
    } else {
      let currNode = this.head;
      while (currNode !== null) {
        if (currNode.next === null) {
          currNode.next = lastNode;
          return this.length++;
        } else {
          currNode = currNode.next;
        }
      }
    }
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log('NULL');
  }
}

module.exports = LinkedList;
