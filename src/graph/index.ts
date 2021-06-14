import TNode from '../node';

class Graph<ContentType>{
  // An adjacency list to hold our graph data
  private _adjList: TNode<ContentType>[];

  constructor() {
      this._adjList = [];
  }

  /**
  * A method to add a new tnode to the graph.
  * @param new TNode Name of the tnode to be added to the graph
  */
  addTNode(newTNode: TNode<ContentType>): boolean {
    // We will keep the implementation simple and focus on the concepts
  
    // If the tnode already exists, do nothing.
    if (this._adjList.find(e => e.name === newTNode.name)) {
        return true;
    }
  
    this._adjList.push(newTNode);
    return true;
  }
  
  /**
  * Adds an edge to the graph.
  * @param tnode1 One of the tnodes between an edge
  * @param tnode2 Another tnode of an edge
  */
  addAnEdge(tnode1: string, tnode2: string): boolean {
    // We will keep the implementation simple and focus on the concepts
    // Do not worry about handling invalid indexes or any other error cases.
    // We will assume all tnodes are valid and already exist.
  
    // Add an tnode2 to tnode1 edges.
    this._adjList.find(e => e.name === tnode1)?.edges.push(tnode2);
  
    // Add an tnode1 to tnode2 edges.
    this._adjList.find(e => e.name === tnode2)?.edges.push(tnode1);
    return true;
  
  }
  
  /**
  * Removes an edge between two tnodes.
  * @param tnode1 One of the tnode of an edge to be removed
  * @param tnode2 ANother tnode of an edge to be removed
  */
  removeAnEdge(tnode1: string, tnode2: string): boolean {
    // We will keep the implementation simple and focus on the concepts
    // Do not worry about handling invalid indexes or any other error cases.
    // We will assume all tnodes are valid and already exist.
  
    // Remove tnode2 from the edges of tnode1
    const foundTNode1 = this._adjList.find(e => e.name === tnode1)
    if (foundTNode1) {
      foundTNode1.edges = foundTNode1.edges.filter(v => v !== tnode2);
    }
  
    // Remove tnode1 from the edges of tnode2
    const foundTNode2 = this._adjList.find(e => e.name === tnode2)
    if (foundTNode2) {
      foundTNode2.edges = foundTNode2.edges.filter(v => v !== tnode1);
    }
  
    return true;
  }
}

export default Graph;
