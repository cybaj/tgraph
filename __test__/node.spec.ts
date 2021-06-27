import TNode from '../src/node';

describe('TNode', () => {
    const tnode = new TNode<number>('summer', 32);

    it('name 을 갖는 node', () => {
        expect(tnode.name).toBe('summer');
    });
});
