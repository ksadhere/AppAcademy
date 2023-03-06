const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  constructor(capacity, numBuckets = 4) {
    this.count = 0;
    this.capacity = capacity;
    this.data = Array.from({ length: capacity }, (v, i) => null);
  }

  hash(key) {
    // Your code here
    return parseInt(sha256(key).slice(0, 8), 16);
  }

  hashMod(key) {
    // Your code here
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    // Your code here
    let index = this.hashMod(key);
    let pair = new KeyValuePair(key, value);
    if (this.data[index] !== null || this.data[index] === pair) {
      throw Error('hash collision or same key/value pair already exists!');
    } else {
      this.data[index] = pair;
      this.count++;
    }
  }

  insertWithHashCollisions(key, value) {
    // Your code here
    let index = this.hashMod(key);
    let hashLink = new KeyValuePair(key, value);
    hashLink.next = this.data[index];
    this.data[index] = hashLink;
    this.count++;
  }

  insert(key, value) {
    // Your code here
    let index = this.hashMod(key);
    let existingPair = this.data[index];
    while (existingPair) {
      if (existingPair.key === key && existingPair.value !== value) {
        return (existingPair.value = value);
      }
      existingPair = existingPair.next;
    }
    this.insertWithHashCollisions(key, value);
  }
}

module.exports = HashTable;
