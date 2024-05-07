class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a-b)
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items[pos]) {
      return this.items[pos]
    } else {
      throw new Error("Out of bounds")
    }
  }

  max() {
    if (this.items.length) {
      return Math.max(...this.items)
    } else {
      throw new Error("Empty SortedList")
    }
  }

  min() {
    if (this.items.length) {
      return Math.min(...this.items)
    } else {
      throw new Error("Empty SortedList")
    }
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
