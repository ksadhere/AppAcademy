class DynamicArray {
  constructor(defaultSize = 4) {
    this.capacity = defaultSize;
    this.data = [];
    this.length = 0;

    /* A self-invoking function. */
    (() => {
      for (let i = 0; i < defaultSize; i++) {
        this.data[i] = undefined;
      }
    })();
  }

  read(index) {
    // Your code here
    return this.data[index];
  }

  unshift(val) {
    // Your code here
    let newData = [];
    if (val) {
      this.length++;
      newData[0] = val;
      for (let i = 0; i < this.data.length; i++) {
        newData[i + 1] = this.data[i];
      }
    }
    this.data = newData;
  }
}

module.exports = DynamicArray;
