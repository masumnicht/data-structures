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
    }  else{ current = current.left }
} else if (value > current.value) {
     if(current.right === null ) { 
            current.right = BinarySearchTree(value);
            inserted = true;
    }
    else{ current = current.right }
}
}
}

searchTreemethods.contains = function (value) {
  current = this;
}

searchTreemethods.depthFirstLog = function () {
  
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
