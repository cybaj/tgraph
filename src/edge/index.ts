import type TNode from "../node"
export const FROM = "&&"

interface ITEdge<ContentType, EdgeType> {
  name: string, ancestry: TNode<ContentType, EdgeType>, descendant: TNode<ContentType, EdgeType>
}

class TEdge<ContentType, EdgeType = {}> implements ITEdge<ContentType, EdgeType> {
    // Name of the edge.
    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(v: string) {
        this._name = v;
    }

    // Name of the ancestry.
    private _ancestry: TNode<ContentType, EdgeType>;
    public get ancestry(): TNode<ContentType, EdgeType> {
        return this._ancestry;
    }
    public set ancestry(v: TNode<ContentType, EdgeType>) {
        this._ancestry = v;
    }

    // Name of the descendant.
    private _descendant: TNode<ContentType, EdgeType>;
    public get descendant(): TNode<ContentType, EdgeType> {
        return this._descendant;
    }
    public set descendant(v: TNode<ContentType, EdgeType>) {
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
