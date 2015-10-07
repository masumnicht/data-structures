var Queue = function() {
  var storage = {};
  storage.length = 0;
  _.extend(storage, queueMethods);
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return storage;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.length;
}

queueMethods.enqueue = function(value) {
  for(var i = this.length; i >= 0; i--) {
    //this[this.length] = this[this.length-1] === undefined ? value : this[this.length-1];
    if(this[this.length-1] !== undefined) {
      this[this.length] = this[this.length-1]
    } else {
      
      this[this.length] = value;
    }
  }
  this.length++;
}

queueMethods.dequeue = function() {
  var result = this[this.length-1];
  if (this.length > 0 ) {
    this.length--;
  }
  console.log(this)
  result = this[this.length];
  delete this[this.length];
  return result;
}