import type TNode from "../node";
export declare const FROM = "&&";
export interface ITEdge<NodeContentType, EdgeType, EdgeContentType> {
    name?: string;
    ancestry?: TNode<NodeContentType, EdgeType>;
    descendant?: TNode<NodeContentType, EdgeType>;
    content?: EdgeContentType;
    index?: number;
}
declare class TEdge<NodeContentType, EdgeType, EdgeContentType> implements ITEdge<NodeContentType, EdgeType, EdgeContentType> {
    private _name;
    get name(): string;
    set name(name: string);
    private _index?;
    get index(): number | undefined;
    set index(n: number | undefined);
    private _content?;
    get content(): EdgeContentType | undefined;
    set content(n: EdgeContentType | undefined);
    private _ancestry?;
    get ancestry(): TNode<NodeContentType, EdgeType> | undefined;
    set ancestry(v: TNode<NodeContentType, EdgeType> | undefined);
    private _descendant?;
    get descendant(): TNode<NodeContentType, EdgeType> | undefined;
    set descendant(v: TNode<NodeContentType, EdgeType> | undefined);
    /**
     * Creates a new vertex with empty edges.
     * @param TNName Name of the node
     */
    constructor(descendant: TNode<NodeContentType, EdgeType>, ancestry: TNode<NodeContentType, EdgeType>, content?: EdgeContentType);
}
export default TEdge;
