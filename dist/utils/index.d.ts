import type { ITEdge } from "../edge";
import type { TNode } from "../node";
export declare function getTerminals<ContentType, EdgeType>(edges: ITEdge<ContentType, EdgeType>[], nodes: TNode<ContentType, EdgeType>[]): TNode<ContentType, {}>[];
export declare function getEntries<ContentType, EdgeType>(edges: ITEdge<ContentType, EdgeType>[], nodes: TNode<ContentType, EdgeType>[]): TNode<ContentType, {}>[];
