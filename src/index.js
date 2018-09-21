class Sorter {
  constructor() {
    // your implementation
    this.sorter=[];
  }

  add(element) {
    // your implementation
    this.sorter.push(element);
  }

  at(index) {
    // your implementation
    this.sorter[index];
  }

  get length() {
    // your implementation
    return this.sorter.length;
  }

  toArray() {
    // your implementation
    return this.sorter;
  }

  sort(indices) {
    // your implementation
  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;