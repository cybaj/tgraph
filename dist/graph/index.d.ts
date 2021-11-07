import TNode from '../node';
import TEdge from '../edge';
declare class Graph<ContentType, EdgeType> {
    private _adjList;
    private _nodes;
    isBuilded: boolean;
    constructor();
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
    buildGraph(newTNode: TNode<ContentType, EdgeType>, newEdges?: TEdge<ContentType, EdgeType>[]): boolean;
    buildGraph(newTNodes: TNode<ContentType, EdgeType>[], newEdges?: TEdge<ContentType, EdgeType>[]): boolean;
}
export default Graph;
