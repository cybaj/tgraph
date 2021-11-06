"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FROM = void 0;
exports.FROM = "&&";
class TEdge {
    /**
     * Creates a new vertex with empty edges.
     * @param TNName Name of the node
     */
    constructor(descendant, ancestry) {
        this._name = descendant.name + exports.FROM + ancestry.name;
        this._descendant = descendant;
        this._ancestry = ancestry;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get index() {
        if (this._index)
            return this._index;
        return undefined;
    }
    set index(n) {
        this._index = n;
    }
    get ancestry() {
        if (this._ancestry)
            return this._ancestry;
        return undefined;
    }
    set ancestry(v) {
        this._ancestry = v;
    }
    get descendant() {
        if (this._descendant)
            return this._descendant;
        return undefined;
    }
    set descendant(v) {
        this._descendant = v;
    }
}
exports.default = TEdge;
//# sourceMappingURL=index.js.map