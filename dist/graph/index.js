"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const edge_1 = __importStar(require("../edge"));
// [TODO] add getNodes and getEdges
class Graph {
    constructor() {
        this._adjList = [];
        // this._adjMatrix = []; // [TODO] adjacency matrix
        this._nodes = [];
    }
    /**
     * Adds an edge to the graph.
     */
    addAnEdge(descendant, ancestry) {
        // We will keep the implementation simple and focus on the concepts
        // Do not worry about handling invalid indexes or any other error cases.
        // We will assume all tnodes are valid and already exist.
        // [NOTICE]
        // directed graph is assumed for q ancestries
        // // Add an tnode2 to tnode1 edges.
        // this._adjList.find((e) => e.name === tnode1)?.edges.push(tnode2);
        // [NOTICE]
        // direction which is from descendant to ancestry is assumed for q ancestries
        // Add an tnode1 to tnode2 edges.
        if (this._adjList.find((e) => e.name === descendant + edge_1.FROM + ancestry))
            return true;
        this._adjList.push(new edge_1.default(descendant, ancestry));
        if (!this._nodes.find((v) => v.name === descendant.name))
            this._nodes.push(descendant);
        if (!this._nodes.find((v) => v.name === ancestry.name))
            this._nodes.push(ancestry);
        return true;
    }
    /**
     * Removes an edge between two tnodes.
     * @param tnode1 One of the tnode of an edge to be removed
     * @param tnode2 ANother tnode of an edge to be removed
     */
    removeAnEdge(descendant, ancestry) {
        // We will keep the implementation simple and focus on the concepts
        // Do not worry about handling invalid indexes or any other error cases.
        // We will assume all tnodes are valid and already exist.
        // [NOTICE]
        // directed graph is assumed for q ancestries
        // // Remove tnode2 from the edges of tnode1
        // const foundTNode1 = this._adjList.find((e) => e.name === tnode1);
        // if (foundTNode1) {
        //     foundTNode1.edges = foundTNode1.edges.filter((v) => v !== tnode2);
        // }
        // [NOTICE]
        // direction which is from descendant to ancestry is assumed for q ancestries
        // Remove tnode1 from the edges of tnode2
        const foundEdge = this._adjList.find((e) => e.name === descendant + edge_1.FROM + ancestry.name);
        if (foundEdge) {
            this._adjList = this._adjList.filter((e) => e !== foundEdge);
        }
        if (!foundEdge ||
            (!this._adjList.find((e) => e.name.endsWith(edge_1.FROM + descendant.name))
                && !(this._adjList.find((e) => e.name.startsWith(descendant.name + edge_1.FROM))))) {
            this._nodes.filter((v) => v !== descendant);
        }
        if (!foundEdge ||
            (!this._adjList.find((e) => e.name.endsWith(edge_1.FROM + ancestry.name))
                && !(this._adjList.find((e) => e.name.startsWith(ancestry.name + edge_1.FROM))))) {
            this._nodes.filter((v) => v !== ancestry);
        }
        return true;
    }
    initGraph(newTNodeOrTNodes, newEdges) {
        // We will keep the implementation simple and focus on the concepts
        if ((newTNodeOrTNodes === null || newTNodeOrTNodes === void 0 ? void 0 : newTNodeOrTNodes.length) > 0) {
            const newTNodes = newTNodeOrTNodes;
            const filteredNodes = newTNodes.filter(candidateNode => this._nodes.some(alreadyNode => alreadyNode.name === candidateNode.name));
            this._nodes.concat(filteredNodes);
        }
        if (newTNodeOrTNodes === null || newTNodeOrTNodes === void 0 ? void 0 : newTNodeOrTNodes.name) {
            const newTNode = newTNodeOrTNodes;
            // If the tnode already exists in edges, do nothing.
            if (this._adjList.find((e) => e.name.endsWith(edge_1.FROM + newTNode.name))) {
                return true;
            }
            // If the tnode already exists, do nothing.
            if (this._nodes.find((n) => n.name === newTNode.name)) {
                return true;
            }
            this._nodes.push(newTNode);
        }
        // assumed that graph had no edges
        if (newEdges) {
            newEdges.forEach(newEdge => {
                if (newEdge.descendant && newEdge.ancestry) {
                    this.addAnEdge(newEdge.descendant, newEdge.ancestry);
                }
            });
        }
        return true;
    }
}
exports.default = Graph;
//# sourceMappingURL=index.js.map