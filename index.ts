import TGraph from "./src/graph"
import TNode from "./src/node"
import TEdge from "./src/edge"

import {getEntries as gE, getTerminals as gT} from "./src/utils"

export const Graph = TGraph;
export const Node = TNode;
export const Edge = TEdge;
export const getEntries = gE;
export const getTerminals = gT;

export default Graph
