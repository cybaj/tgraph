"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TNode = void 0;
class TNode {
    /**
     * Creates a new vertex with empty edges.
     * @param TNName Name of the node
     */
    constructor(TNName, TNContent, category) {
        this._name = TNName;
        this._edges = [];
        this._content = TNContent;
        this._category = category;
    }
    get name() {
        return this._name;
    }
    set name(v) {
        this._name = v;
    }
    get category() {
        if (this._category)
            return this._category;
        return undefined;
    }
    set category(v) {
        this._category = v;
    }
    get edges() {
        return this._edges;
    }
    set edges(v) {
        this._edges = v;
    }
    get content() {
        return this._content;
    }
    set content(content) {
        this._content = content;
    }
}
exports.TNode = TNode;
exports.default = TNode;
//# sourceMappingURL=index.js.map