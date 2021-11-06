import TNode from '../node';
declare class Graph<ContentType, EdgeType> {
    private _adjList;
    private _nodes;
    constructor();
    /**
     */
    initGraph(newTNode: TNode<ContentType, EdgeType>): boolean;
    initGraph(newTNodeArr?: TNode<ContentType, EdgeType>[]): boolean;
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
}
export default Graph;
