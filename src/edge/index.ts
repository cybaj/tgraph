import type TNode from "../node"
export const FROM = "&&"

export interface ITEdge<NodeContentType, EdgeType, EdgeContentType> {
  name?: string, 
  ancestry?: TNode<NodeContentType, EdgeType>, 
  descendant?: TNode<NodeContentType, EdgeType>, 
  content?: EdgeContentType,
  index?: number;
}

class TEdge<NodeContentType, EdgeType, EdgeContentType> implements ITEdge<NodeContentType, EdgeType, EdgeContentType> {
    // Name of the edge.
    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(name: string) {
        this._name = name;
    }

    // Index of the edge.
    private _index?: number;
    public get index(): number | undefined {
      if (this._index) return this._index
      return undefined;
    }
    public set index(n: number | undefined) {
        this._index = n;
    }

    // Content of the edge.
    private _content?: EdgeContentType;
    public get content(): EdgeContentType | undefined {
      if (this._content) return this._content
      return undefined;
    }
    public set content(n: EdgeContentType | undefined) {
        this._content = n;
    }

    // Name of the ancestry.
    private _ancestry?: TNode<NodeContentType, EdgeType> | undefined;
    public get ancestry(): TNode<NodeContentType, EdgeType> | undefined{
        if (this._ancestry) return this._ancestry;
        return undefined;
    }
    public set ancestry(v: TNode<NodeContentType, EdgeType> | undefined) {
        this._ancestry = v;
    }

    // Name of the descendant.
    private _descendant?: TNode<NodeContentType, EdgeType>;
    public get descendant(): TNode<NodeContentType, EdgeType> | undefined{
        if (this._descendant) return this._descendant;
        return undefined;
    }
    public set descendant(v: TNode<NodeContentType, EdgeType> | undefined) {
        this._descendant = v;
    }

    /**
     * Creates a new vertex with empty edges.
     * @param TNName Name of the node
     */
    constructor(descendant: TNode<NodeContentType, EdgeType>, ancestry: TNode<NodeContentType, EdgeType>, content?: EdgeContentType) {
      this._name = descendant.name + FROM + ancestry.name;
      this._descendant = descendant;
      this._ancestry = ancestry;
      this._content = content;
    }
}

export default TEdge;
