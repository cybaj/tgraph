import TGraph from "./graph";
import TNode from "./node";
import TEdge from "./edge";
import { getEntries as gE, getTerminals as gT } from "./utils";
export declare const Graph: typeof TGraph;
export declare const Node: typeof TNode;
export declare const Edge: typeof TEdge;
export declare const getEntries: typeof gE;
export declare const getTerminals: typeof gT;
export type TGraphType<ContentType, EdgeType={}> = TGraph<ContentType, EdgeType>
export type TNodeType<ContentType, EdgeType={}> = TNode<ContentType, EdgeType>
export type TEdgeType<ContentType, EdgeType={}> = TEdge<ContentType, EdgeType>
export default Graph;
