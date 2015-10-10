

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = [];
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if(node in this.nodes){
    return true;
  }
  return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var result = false;
  _.each(this.nodes[fromNode], function (item){
    if (item === toNode){
      result = true;
    }
  })
  return result;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  _.each(this.nodes[fromNode], function (item, index, collection){
    if (item === toNode){
      collection.splice(index, 1);
    }
  })
  _.each(this.nodes[toNode], function (item, index, collection){
    if (item === fromNode){
      collection.splice(index, 1);
    }
  })
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.nodes, function (val, prop) {
    cb(prop);
  })
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


