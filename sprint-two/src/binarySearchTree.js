var BinarySearchTree = function(value) {
  var newTree = Object.create(searchTreemethods);
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  return newTree;
};
var searchTreemethods = {};

searchTreemethods.insert = function (value) {
  var inserted = false;
  var current = this;
  while(!inserted) {
    if(value < current.value ) {
      if(current.left === null ) { 
        current.left = BinarySearchTree(value);
        inserted = true;
      } else { 
        current = current.left;
      }
    } else if (value > current.value) {
      if(current.right === null ) { 
        current.right = BinarySearchTree(value);
        inserted = true;
      } else { 
        current = current.right;
      }
    }
  }
}

searchTreemethods.contains = function (target) {
  var current = this;
  while(current !== null) {
    if(current.value === target) {
      return true;
    } else if (target < current.value) { 
      current = current.left;
    } else if (target > current.value) {
      current = current.right;
    }
  }
  return false;
}

searchTreemethods.depthFirstLog = function (cb) {
  var current = this;
    if(current) {
    cb(current.value);
    if(current.left !== null) {
    current.left.depthFirstLog(cb);
    }
  if(current.right !== null) {
    current.right.depthFirstLog(cb);
    }
  }
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
