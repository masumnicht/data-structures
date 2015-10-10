

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tupel = [k,v];
  if(!this._storage.get(index)){
    this._storage.set(index, []);
  }
  this._storage.get(index).push(tupel);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var result;
  console.log(bucket);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k){
      result = bucket[i][1];
    }
  }
  return result === undefined ? null : result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k){
      bucket[i] = [null, null];
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


