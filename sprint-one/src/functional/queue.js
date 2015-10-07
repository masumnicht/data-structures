var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var length = 0;
  someInstance.enqueue = function(value) {
    length++;
  };

  someInstance.dequeue = function() {
    if(length>0){
      length--;
    }
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
