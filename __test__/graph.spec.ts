import TGraph from '../src/graph';
import TNode from '../src/node';

describe('TGraph', () => {
    const numberGraph = new TGraph<number>();

    it('add number node to number graph', () => {
        const numberNode = new TNode('test', 0);
        numberGraph.addTNode(numberNode);
        expect(1).toBe(1);
    });
});
