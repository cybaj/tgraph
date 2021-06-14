class TNode<ContentType> {
    // Name of the node.
    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(v: string) {
        this._name = v;
    }

    // Edges associated with the node
    private _edges: string[];
    public get edges(): string[] {
        return this._edges;
    }
    public set edges(v: string[]) {
        this._edges = v;
    }

    // Content of the node
    private _content: ContentType;
    public get content(): ContentType {
        return this._content;
    }
    public set content(content: ContentType) {
        this._content = content;
    }
  
    /**
     * Creates a new vertex with empty edges.
     * @param TNName Name of the node
     */
    constructor(TNName: string, TNContent: ContentType) {
        this._name = TNName;
        this._edges = [];
        this._content = TNContent;
    }
}

export default TNode;
