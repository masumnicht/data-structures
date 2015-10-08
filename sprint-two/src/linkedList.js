var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var current = Node(value);
    
    if(!list.head){
      list.head = current
    } else {
      list.tail.next = current;
    }
    list.tail = current;

  };

  list.removeHead = function() {
    var tempHead = list.head;
    list.head = list.head.next;
    return tempHead.value;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    while(currentNode){
      if(currentNode.value===target){
        return true;
      }
      currentNode = currentNode.next;
      
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
