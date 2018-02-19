class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
    this.EdgeWeight = new Map();
    this.VertiexWeight = new Map();
  }

  addVertex(v, wt) {
    this.AdjList.set(v, []);
    this.EdgeWeight.set(v, {});
    if (wt) {
      this.VertiexWeight.set(v, wt);
    } else {
      this.VertiexWeight.set(v, 1);
    }
  }
  removeVertex(v) {
    if (this.AdjList.has(v)) {
      // var neighbourNode = this.AdjList.get(v);
      var neighbourNode = this.neighbour(v);
      for (var vertix of neighbourNode) {
        var edges = this.AdjList.get(vertix);
        var index = edges.indexOf(v);
        if (index > -1) {
          edges.splice(index, 1);
          this.AdjList.set(vertix, edges)
          delete this.EdgeWeight[edges][v]
        }
      }
      this.AdjList.delete(v);
      delete this.EdgeWeight[v]
    } else {
      console.log("Vertix not found");
    }
    this.printGraph();
  }
  addEdge(v, w, wt) {
    this.AdjList.get(v).push(w);
    this.AdjList.get(w).push(v);
    if (wt) {
      this.EdgeWeight[v] = {
        [w]: wt
      }
      this.EdgeWeight[w] = {
        [v]: wt
      }
    } else {
      // this.EdgeWeight.set(v,{[w]: 1})
      // this.EdgeWeight.set(w,{[v]: 1})
      // console.log(this.EdgeWeight[w], this.EdgeWeight[v]);
      if (!this.EdgeWeight[w]) {
        this.EdgeWeight[w] = {}
      }
      if (!this.EdgeWeight[v]) {
        this.EdgeWeight[v] = {}
      }
      this.EdgeWeight[w][v] = 1;
      this.EdgeWeight[v][w] = 1;

    }
  }
  removeEdges(v1, v2) {
    if (this.AdjList.has(v1) && this.AdjList.has(v2)) {
      var edges1 = this.AdjList.get(v1);
      var index1 = edges1.indexOf(v2);
      if (index1 > -1) {
        edges1.splice(index1, 1);
        this.AdjList.set(v1, edges1)
      }
      var edges2 = this.AdjList.get(v2);
      var index2 = edges2.indexOf(v1);
      if (index2 > -1) {
        edges2.splice(index2, 1);
        this.AdjList.set(v2, edges2)
      }
    } else {
      console.log("Vertix not found");
    }
    this.printGraph();
  }
  adjacent(v1, v2) {
    if (this.AdjList.has(v1) && this.AdjList.has(v2)) {
      var edges1 = this.AdjList.get(v1);
      var edges2 = this.AdjList.get(v2);
      if (edges1.includes(v2) && edges2.includes(v1)) {
        return true
      } else {
        return false
      }
    } else {
      console.log("Vertix not found");
    }
  }
  neighbour(v) {
    if (this.AdjList.has(v)) {
      var neighbourNode = this.AdjList.get(v);
      return neighbourNode;
    } else {
      console.log("Vertix not found");
    }
  }
  printGraph() {
    var get_keys = this.AdjList.keys();
    for (var i of get_keys) {
      var get_values = this.AdjList.get(i);
      var conc = "";
      for (var j of get_values)
        conc += j + " ";
      console.log(i + " -> " + conc);
    }
  }
  getVertexValue(v) {
    return this.VertiexWeight.get(v);
  }
  setVertexValue(v, wt) {
    return this.VertiexWeight.set(v, wt);
  }
  getEdgeValue(v1, v2) {
    if (this.AdjList.has(v1) && this.AdjList.has(v2)) {
      if (this.adjacent(v1, v2)) {
        var neighbour = this.neighbour(v1);
        if (neighbour.includes(v2)) {
          // console.log(this.EdgeWeight[v1]);
          return this.EdgeWeight[v1][v2]
        }
      } else {
        return "Not adjacent nodes"
      }
    } else {
      console.log("Vertix not found");
    }
  }
}

var g = new Graph(6);
var vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

for (var i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}

g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

// g.printGraph();
