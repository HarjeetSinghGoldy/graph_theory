function Queue() {
  var a = [],
    b = 0;
  this.getLength = function() {
    return a.length - b
  };
  this.isEmpty = function() {
    return 0 == a.length
  };
  this.enqueue = function(b) {
    a.push(b)
  };
  this.dequeue = function() {
    if (a.length != 0) {
      var c = a[b];
      if (2 * ++b >= a.length) {
        a = a.slice(b), b = 0;
      }
      return c
    }
  };
  this.peek = function() {
    return 0 < a.length ? a[b] : void 0
  }
};

class Graph {

  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
  }

  addVertex(v) {
    this.AdjList.set(v, []);
  }

  addEdge(v, w) {
    this.AdjList.get(v).push(w);
    this.AdjList.get(w).push(v);
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

  bfs(startingNode) {
    var visited = [];
    for (var i = 0; i < this.noOfVertices; i++) {
      visited[i] = false;
    }
    var q = new Queue();

    visited[startingNode] = true;
    q.enqueue(startingNode);

    while (!q.isEmpty()) {
      var getQueueElement = q.dequeue();

      console.log(getQueueElement);

      var get_List = this.AdjList.get(getQueueElement);

      for (var i in get_List) {
        var neigh = get_List[i];
        if (!visited[neigh]) {
          visited[neigh] = true;
          q.enqueue(neigh);
        }
      }
    }
  }

dfs(startingNode)
{

    var visited = [];
    for (var i = 0; i < this.noOfVertices; i++){
      visited[i] = false;
    }

    this.DFSUtil(startingNode, visited);
}

DFSUtil(vert, visited)
{
    visited[vert] = true;
    console.log(vert);

    var get_neighbours = this.AdjList.get(vert);

    for (var i in get_neighbours) {
        var get_elem = get_neighbours[i];
        if (!visited[get_elem])
            this.DFSUtil(get_elem, visited);
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

g.printGraph();
console.log("BFS");
g.bfs(process.argv[2]);
console.log("DFS");
g.dfs(process.argv[2]);


The basic operations provided by a graph data structure G usually include:[1]

adjacent(G, x, y): tests whether there is an edge from the vertex x to the vertex y;
neighbors(G, x): lists all vertices y such that there is an edge from the vertex x to the vertex y;
add_vertex(G, x): adds the vertex x, if it is not there;
remove_vertex(G, x): removes the vertex x, if it is there;
add_edge(G, x, y): adds the edge from the vertex x to the vertex y, if it is not there;
remove_edge(G, x, y): removes the edge from the vertex x to the vertex y, if it is there;
get_vertex_value(G, x): returns the value associated with the vertex x;
set_vertex_value(G, x, v): sets the value associated with the vertex x to v.
Structures that associate values to the edges usually also provide:[1]

get_edge_value(G, x, y): returns the value associated with the edge (x, y);
set_edge_value(G, x, y, v): sets the value associated with the edge (x, y) to v.
