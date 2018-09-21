class Sorter {
  constructor() {
    // your implementation
    this.sorter = [];
    this.func = function(a, b) {
      return a - b;
    }
  }

  add(element) {
    // your implementation
    this.sorter.push(element);
  }

  at(index) {
    // your implementation
    return this.sorter[index];

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
    var temparr=[];
    if(indices[0]>indices[1]){
      indices.reverse();
    }
    for(var i =0;i<indices.length;i++){
      temparr.push(this.sorter[indices[i]]);
    }
    temparr.sort(this.func);
    for(var k=0;k<temparr.length;k++){
      this.sorter[indices[k]]=temparr[k];
    }
  }

  setComparator(compareFunction) {
    // your implementation
    this.func=compareFunction;
  }
}

module.exports = Sorter;