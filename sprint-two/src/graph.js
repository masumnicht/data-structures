

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push({value: node, edges: []})
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var result = false
  _.each(this.nodes, function (item) {
    if(item.value === node) {
      result = true
    }
  })
  return result;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for(var i = 0 ; i < this.nodes.length ; i++ ){
    if(this.nodes[i].value===node){
      this.nodes.splice(i,1);
      i--;
    }
  }
  return this.nodes;
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var result = false;
  _.each(this.nodes, function (item) {
    if( item.value === fromNode && item.edges.indexOf(toNode) !== -1) {
      result = true;
    }
  });
  return result;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  _.each(this.nodes, function (item) {
    if(item.value === fromNode) {
      item.edges.push(toNode);
    }
  });
  _.each(this.nodes, function (item) {
    if(item.value === toNode) {
      item.edges.push(fromNode);
    }
  });
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

   for(var i = 0 ; i < this.nodes.length; i++) {
    if(this.nodes[i].value === fromNode && this.nodes[i].edges.indexOf(toNode) !== -1) {
     for(var j = 0; j < this.nodes[i].edges.length; j++) {
            if(this.nodes[i].edges[j] === toNode) {
                this.nodes[i].edges.splice(j, 1)
    // //     //     console.log(this.nodes[i].edges)
                }
       }
    }
  }
  
    for(var k = 0 ; k < this.nodes.length; k++) {
    if(this.nodes[k].value === toNode && this.nodes[k].edges.indexOf(fromNode) !== -1) {
     for(var h = 0; h < this.nodes[k].edges.length; h++) {
            if(this.nodes[k].edges[h] === fromNode) {
                this.nodes[k].edges.splice(h, 1)
    // //     //     console.log(this.nodes[i].edges)
                }
       }
    }
  }
  // _.each(this.nodes, function (item, index) {
  //   if(item.value === fromNode && item.edges.indexOf(toNode) !== -1) {
  //     _.each(item.edges, function (element, index) {
  //       if(element === toNode) {
  //         item.edges.splice(index, 1);
  //         index--;
  //       }
  //     })
  //   }
  // })
  // _.each(this.nodes, function (item, index) {
  //   if(item.value === toNode && item.edges.indexOf(fromNode) !== -1 ) {
  //     _.each(item.edges, function (element, index) {
  //       if(element === toNode) {
  //         item.edges.splice(index, 1);
  //         index--;
  //       }
  //     })
  //   }
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.nodes, function (item) {
    cb(item.value);
  })
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


