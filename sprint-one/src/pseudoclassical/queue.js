var Queue = function() {
  this.length = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype.size = function(){
  return this.length;
}

Queue.prototype.enqueue = function(value){
  for(var i = this.length; i >= 0; i--){
    this[i] = this[i-1] === undefined ? value : this[i-1]
  }
  this.length++;
}

Queue.prototype.dequeue = function(){
  var result;
  if(this.length>0){
    this.length--;
    result = this[this.length];
    delete this[this.length];
  }
  return result;
}
