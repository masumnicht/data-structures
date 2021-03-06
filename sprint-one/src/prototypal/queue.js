var Queue = function() {
  var storage = Object.create(queueMethods);
  storage.length = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return storage;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.length;
}

queueMethods.enqueue = function(value) {
  for(var i = this.length; i >= 0; i--){
    this[i] = this[i-1] === undefined ? value : this[i-1]
  }
  this.length++;
}

queueMethods.dequeue = function() {
  var result;
  if(this.length > 0){
    this.length--;
    result = this[this.length];
    delete this[this.length];
  }
  return result;
}


