var DoublyLinkedList = function() {
  var doubleLinked = Object.create(doubleLinkedMethods);
  doubleLinked.head = null;
  doubleLinked.tail = null;
  return doubleLinked;
}

var doubleLinkedMethods = {};

doubleLinkedMethods.addToTail = function (value) {
 
  var current = new Node1(value);
    console.log(current)
    if (!this.head){
      this.head = current 
    }
    if (!this.tail) {
      this.tail = current;
    } else {
      this.tail.next = current;
      current.prev = this.tail;
      this.tail = this.tail.next;
    }
  
}

doubleLinkedMethods.addToHead = function (value) {
  var current = new Node1(value);
  if (!this.tail) {
      this.tail = current;
  }
  if(!this.head) {
    this.head = current
  } else {
    this.head.prev = current;
    current.next = this.head;
    this.head = this.head.prev;
  }

}

doubleLinkedMethods.removeHead = function () {
  var value = this.head.value;
  this.head = this.head.next;
  return value;
}

doubleLinkedMethods.removeTail = function () {
  //set tail to tail.prev
  // this.tail = this.tail.prev;
  var value = this.tail.value;
  this.tail = this.tail.prev;
  return value;

}

doubleLinkedMethods.contains = function (value) {
  var current = this.head;
  while (current){
    if (value === current.value){
      return true;
    } else {
      current = current.next;
    }
  }
  return false;
}


var Node1 = function (value) {
  this.value = value;
  this.next = null;
  this.prev = null;
}



