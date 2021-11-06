import type TNode from "../node";
export declare const FROM = "&&";
export interface ITEdge<ContentType, EdgeType> {
    name: string;
    ancestry?: TNode<ContentType, EdgeType>;
    descendant?: TNode<ContentType, EdgeType>;
    index?: number;
}
declare class TEdge<ContentType, EdgeType = {}> implements ITEdge<ContentType, EdgeType> {
    private _name;
    get name(): string;
    set name(name: string);
    private _index?;
    get index(): number | undefined;
    set index(n: number | undefined);
    private _ancestry?;
    get ancestry(): TNode<ContentType, EdgeType> | undefined;
    set ancestry(v: TNode<ContentType, EdgeType> | undefined);
    private _descendant?;
    get descendant(): TNode<ContentType, EdgeType> | undefined;
    set descendant(v: TNode<ContentType, EdgeType> | undefined);
    /**
     * Creates a new vertex with empty edges.
     * @param TNName Name of the node
     */
    constructor(descendant: TNode<ContentType, EdgeType>, ancestry: TNode<ContentType, EdgeType>);
}
export default TEdge;
