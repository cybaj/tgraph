import TNode from '../node';
import TEdge, {FROM} from '../edge';

// [TODO] add getNodes and getEdges
class Graph<ContentType, EdgeType> {
    // An adjacency list to hold our graph data
    private _adjList: TEdge<ContentType, EdgeType>[];
    // private _adjMatrix: boolean[][];
    private _nodes: TNode<ContentType, EdgeType>[];

    constructor() {
        this._adjList = [];
        // this._adjMatrix = []; // [TODO] adjacency matrix
        this._nodes = [];
    }

    /**
     * Adds an edge to the graph.
     */
    addAnEdge(descendant: TNode<ContentType, EdgeType>, ancestry: TNode<ContentType, EdgeType>): boolean {
        // We will keep the implementation simple and focus on the concepts
        // Do not worry about handling invalid indexes or any other error cases.
        // We will assume all tnodes are valid and already exist.

        // [NOTICE]
        // directed graph is assumed for q ancestries
        // // Add an tnode2 to tnode1 edges.
        // this._adjList.find((e) => e.name === tnode1)?.edges.push(tnode2);

        // [NOTICE]
        // direction which is from descendant to ancestry is assumed for q ancestries
        // Add an tnode1 to tnode2 edges.
        if (this._adjList.find((e) => e.name === descendant + FROM + ancestry)) return true;

        this._adjList.push(new TEdge(descendant, ancestry));

        if (!this._nodes.find((v) => v.name === descendant.name)) this._nodes.push(descendant)
        if (!this._nodes.find((v) => v.name === ancestry.name)) this._nodes.push(ancestry)
        return true;
    }

    /**
     * Removes an edge between two tnodes.
     * @param tnode1 One of the tnode of an edge to be removed
     * @param tnode2 ANother tnode of an edge to be removed
     */
    removeAnEdge(descendant: TNode<ContentType, EdgeType>, ancestry: TNode<ContentType, EdgeType>): boolean {
        // We will keep the implementation simple and focus on the concepts
        // Do not worry about handling invalid indexes or any other error cases.
        // We will assume all tnodes are valid and already exist.

        // [NOTICE]
        // directed graph is assumed for q ancestries
        // // Remove tnode2 from the edges of tnode1
        // const foundTNode1 = this._adjList.find((e) => e.name === tnode1);
        // if (foundTNode1) {
        //     foundTNode1.edges = foundTNode1.edges.filter((v) => v !== tnode2);
        // }

        // [NOTICE]
        // direction which is from descendant to ancestry is assumed for q ancestries
        // Remove tnode1 from the edges of tnode2
        const foundEdge = this._adjList.find((e) => e.name === descendant + FROM + ancestry.name);
        if (foundEdge) {
            this._adjList = this._adjList.filter((e) => e !== foundEdge);
        }
        if (!foundEdge || 
          (!this._adjList.find((e) => e.name.endsWith(FROM + descendant.name ))
            && !(this._adjList.find((e) => e.name.startsWith(descendant.name + FROM)))
          )) {
            this._nodes.filter((v) => v !== descendant);
        }
        if (!foundEdge || 
          (!this._adjList.find((e) => e.name.endsWith(FROM + ancestry.name ))
            && !(this._adjList.find((e) => e.name.startsWith(ancestry.name + FROM)))
          )) {
            this._nodes.filter((v) => v !== ancestry);
        }

        return true;
    }

    /**
     */
    initGraph(newTNode: TNode<ContentType, EdgeType>): boolean;
    initGraph(newTNodes: TNode<ContentType, EdgeType>[]): boolean;
    initGraph(newTNodeOrTNodes: any, newEdges?: TEdge<ContentType, EdgeType>[]): boolean {
        // We will keep the implementation simple and focus on the concepts

        if (newTNodeOrTNodes?.length > 0) {
          const newTNodes = newTNodeOrTNodes as TNode<ContentType, EdgeType>[]
          const filteredNodes = newTNodes.filter(candidateNode => 
            this._nodes.some(alreadyNode =>
            alreadyNode.name === candidateNode.name))
          this._nodes.concat(filteredNodes)
        }
        if (newTNodeOrTNodes?.name) {
          const newTNode = newTNodeOrTNodes;
          // If the tnode already exists in edges, do nothing.
          if (this._adjList.find((e) => e.name.endsWith(FROM + newTNode.name))) {
              return true;
          }
          
          // If the tnode already exists, do nothing.
          if (this._nodes.find((n) => n.name === newTNode.name)) {
              return true;
          }

          this._nodes.push(newTNode);
        }
        // assumed that graph had no edges
        if (newEdges) {
          newEdges.forEach(newEdge => {
            if (newEdge.descendant && newEdge.ancestry) {
              this.addAnEdge(newEdge.descendant, newEdge.ancestry);
            }
          })
        }
        return true;
    }

}

export default Graph;
