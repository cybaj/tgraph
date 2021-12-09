import TGraph from '../src/graph';
import TNode from '../src/node';
import TEdge from '../src/edge';
import type {TEdgeType} from "../src/index.d";
// import type {TNodeType} from "../src/index.d";
import utils from "../src/utils"

describe('TGraph Test', () => {

    it('add number node to number graph', () => {
      const graph = new TGraph<number, TEdgeType<number>, {}>();
      const numberNode = new TNode<number, TEdgeType<number>>('test', 0);
      graph.buildGraph(numberNode);
      expect(graph.isBuilded).toBe(true);
      expect(graph.nodes[0]).toBe(numberNode);
    });

    it('add two node and one edge', () => {
      const graph = new TGraph<number, TEdgeType<number, TEdgeType<number>>, {id: string}>();
      const appleNode = new TNode<number, TEdgeType<number, TEdgeType<number>>>('apple', 0);
      const bananaNode = new TNode<number, TEdgeType<number, TEdgeType<number>>>('banana', 1);
      const edge = new TEdge<number, TEdgeType<number, TEdgeType<number>>, {id: string} >(bananaNode, appleNode, {id: 'down'})
      graph.buildGraph([appleNode, bananaNode], [edge]);

      expect(utils.getEntries(graph.adjList, graph.nodes)[0]).toEqual(appleNode)
      expect(utils.getTerminals(graph.adjList, graph.nodes)[0]).toEqual(bananaNode)
    })
});
