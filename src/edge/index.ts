import type TNode from "../node"
export const FROM = "&&"

export interface ITEdge<ContentType, EdgeType> {
  name: string, 
  ancestry?: TNode<ContentType, EdgeType>, 
  descendant?: TNode<ContentType, EdgeType>, 
  index?: number;
}

class TEdge<ContentType, EdgeType = {}> implements ITEdge<ContentType, EdgeType> {
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


    // Name of the ancestry.
    private _ancestry?: TNode<ContentType, EdgeType> | undefined;
    public get ancestry(): TNode<ContentType, EdgeType> | undefined{
        if (this._ancestry) return this._ancestry;
        return undefined;
    }
    public set ancestry(v: TNode<ContentType, EdgeType> | undefined) {
        this._ancestry = v;
    }

    // Name of the descendant.
    private _descendant?: TNode<ContentType, EdgeType>;
    public get descendant(): TNode<ContentType, EdgeType> | undefined{
        if (this._descendant) return this._descendant;
        return undefined;
    }
    public set descendant(v: TNode<ContentType, EdgeType> | undefined) {
        this._descendant = v;
    }

    /**
     * Creates a new vertex with empty edges.
     * @param TNName Name of the node
     */
    constructor(descendant: TNode<ContentType, EdgeType>, ancestry: TNode<ContentType, EdgeType>) {
      this._name = descendant.name + FROM + ancestry.name;
      this._descendant = descendant;
      this._ancestry = ancestry;
    }
}

export default TEdge;
