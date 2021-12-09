import TGraph from "./graph";
import TNode from "./node";
import TEdge from "./edge";
import { getEntries as gE, getTerminals as gT } from "./utils";
export declare const Graph: typeof TGraph;
export declare const Node: typeof TNode;
export declare const Edge: typeof TEdge;
export declare const getEntries: typeof gE;
export declare const getTerminals: typeof gT;
export type TGraphType<ContentType, EdgeType={}, EdgeContentType={}> = TGraph<ContentType, EdgeType, EdgeContentType>
export type TNodeType<ContentType, EdgeType={}, EdgeContentType={}> = TNode<ContentType, EdgeType, EdgeContentType>
export type TEdgeType<ContentType, EdgeType={}, EdgeContentType={}> = TEdge<ContentType, EdgeType, EdgeContentType>
export default Graph;
