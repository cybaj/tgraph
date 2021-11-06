export declare class TNode<ContentType, EdgeType = {}> {
    private _name;
    get name(): string;
    set name(v: string);
    private _category;
    get category(): string | undefined;
    set category(v: string | undefined);
    private _edges;
    get edges(): EdgeType[];
    set edges(v: EdgeType[]);
    private _content;
    get content(): ContentType;
    set content(content: ContentType);
    /**
     * Creates a new vertex with empty edges.
     * @param TNName Name of the node
     */
    constructor(TNName: string, TNContent: ContentType, category?: string);
}
export default TNode;
