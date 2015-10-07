var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    length++;
  };

  someInstance.pop = function() {
    if(length>0){
      length--;
    }
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
