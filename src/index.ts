import TGraph from "./graph"
import TNode from "./node"
import TEdge from "./edge"

import {getEntries as gE, getTerminals as gT} from "./utils"

export const Graph = TGraph;
export const Node = TNode;
export const Edge = TEdge;
export const getEntries = gE;
export const getTerminals = gT;

export default Graph
