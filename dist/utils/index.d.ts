import type { ITEdge } from "../edge";
import type { TNode } from "../node";
export declare function getTerminals<ContentType, EdgeType, EdgeContentType>(edges: ITEdge<ContentType, EdgeType, EdgeContentType>[], nodes: TNode<ContentType, EdgeType>[]): TNode<ContentType, {}>[];
export declare function getEntries<ContentType, EdgeType, EdgeContentType>(edges: ITEdge<ContentType, EdgeType, EdgeContentType>[], nodes: TNode<ContentType, EdgeType>[]): TNode<ContentType, {}>[];
