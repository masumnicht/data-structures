

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage[index] = Array.isArray(this._storage[index]) ? this._storage[index] : [];
  this._storage[index].push([k,v]);

  // console.log(this)
  // if(!Array.isArray(this._storage[index]) ) {
  //   this._storage.set(index, [])
  // } 
  // this._storage[index].push([k,v]);
    //check to see if bucket array exists, if not create one
      //use set to store value in Hash
        //trap key and value in array of two
        //push into the bucket

  
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
  // _.each(this._storage[index], function(item, i){
  //   console.log(this._storage[index])
  //   if(item[0] === k) {
  //     this._storage[index].splice(i,1);
  //   }
  // })
for(var i = 0; i < this._storage[index].length; i++) {
  if(this._storage[index][i][0] === k) {
    this._storage[index][i] = [null, null];
  }
  //find index and remove element (splicing)
}

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


