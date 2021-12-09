import TNode from '../src/node';
import TEdge, {FROM} from '../src/edge';
import type {TEdgeType} from "../src/index.d";

describe('Edge test suit', () => {
    const appleNode = new TNode<number, TEdgeType<number, TEdgeType<number>>>('apple', 0);
    const bananaNode = new TNode<number, TEdgeType<number, TEdgeType<number>>>('banana', 1);
    const edge = new TEdge<number, TEdgeType<number, TEdgeType<number>>, {id: string} >(bananaNode, appleNode, {id: 'down'})
    it('single edge', () => {
      expect(edge.name).toBe("banana"+FROM+"apple")
      expect(edge.ancestry).toEqual(appleNode)
      expect(edge.descendant).toEqual(bananaNode)
      expect(edge.content).toEqual({id: 'down'})
    }
    );
});
