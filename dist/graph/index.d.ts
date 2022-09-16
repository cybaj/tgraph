import TNode from '../node';
import TEdge from '../edge';
declare class Graph<ContentType, EdgeType, EdgeContentType> {
    private _adjList;
    get adjList(): TEdge<ContentType, EdgeType, EdgeContentType>[];
    set adjList(v: TEdge<ContentType, EdgeType, EdgeContentType>[]);
    private _nodes;
    get nodes(): TNode<ContentType, EdgeType>[];
    set nodes(v: TNode<ContentType, EdgeType>[]);
    isBuilded: boolean;
    constructor();
    /**
     * Add an node under or uppon the node.
     */
    addAnNode(newNode: TNode<ContentType, EdgeType>, name: string, type?: string): boolean;
    /**
     * Adds an edge to the graph.
     */
    addAnEdge(descendant: TNode<ContentType, EdgeType>, ancestry: TNode<ContentType, EdgeType>): boolean;
    /**
     * Removes an edge between two tnodes.
     * @param tnode1 One of the tnode of an edge to be removed
     * @param tnode2 ANother tnode of an edge to be removed
     */
    removeAnEdge(descendant: TNode<ContentType, EdgeType>, ancestry: TNode<ContentType, EdgeType>): boolean;
    /**
     */
    buildGraph(newTNode: TNode<ContentType, EdgeType>, newEdges?: TEdge<ContentType, EdgeType, EdgeContentType>[]): boolean;
    buildGraph(newTNodes: TNode<ContentType, EdgeType>[], newEdges?: TEdge<ContentType, EdgeType, EdgeContentType>[]): boolean;
}
export default Graph;
