var Stack = function() {
  var storage = {};
  storage.length = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  _.extend(storage, stackMethods);
  return storage;
};

var stackMethods = {};

stackMethods.size = function () {
  return this.length;
}

stackMethods.push = function (value) {
  this[this.length] = value;
  this.length++;
}

stackMethods.pop = function () {
  var result;
  if(this.length > 0) {
    this.length--;
    result = this[this.length];
    delete this[this.length];
  }
  return result;
}


