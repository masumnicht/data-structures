var Tree = function(value) {
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  console.log(this)
  var currentNode = Tree(value);
  //this.children = [];  // fix me
  this.children.push(currentNode);
};

treeMethods.contains = function(target) {
  //var current = startoflist
  var current = this.children;
    for(var i = 0 ; i < current.length; i++) {
      //while currentchildren is not null
      while(current[i]) {
        if(current[i].value === target) {
          return true;
        } else {
          console.log(current[i]);
          current[i] = current[i].children;
          console.log(current[i])
        }
      }
         //check is current child contains value
           //if it does return true
           //if not reassign current children to be current child
//return false
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
