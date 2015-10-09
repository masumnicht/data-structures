

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage[index] = Array.isArray(this._storage[index]) ? this._storage[index] : [];
  this._storage[index].push([k,v]);

  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var result;
  _.each(this._storage[index], function(item) {
    if(item[0] === k) {
      result = item[1];
    }
  });
  return result === undefined ? null : result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
for(var i = 0; i < this._storage[index].length; i++) {
  if(this._storage[index][i][0] === k) {
    this._storage[index][i] = [null, null];
  }
}

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


