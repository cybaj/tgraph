import type { ITEdge } from "../edge";
import type { TNode } from "../node";
import type { TEdgeType } from "../index.d";
export declare function getTerminals<ContentType, EdgeType, EdgeContentType>(edges: ITEdge<ContentType, EdgeType, EdgeContentType>[], nodes: TNode<ContentType, TEdgeType<ContentType, EdgeType>>[]): TNode<ContentType, TEdgeType<ContentType, EdgeType, {}>>[];
export declare function getEntries<ContentType, EdgeType, EdgeContentType>(edges: ITEdge<ContentType, EdgeType, EdgeContentType>[], nodes: TNode<ContentType, EdgeType>[]): TNode<ContentType, EdgeType>[];
declare const _default: {
    getTerminals: typeof getTerminals;
    getEntries: typeof getEntries;
};
export default _default;
