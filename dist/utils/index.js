"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEntries = exports.getTerminals = void 0;
/*
 * assumed no circular
 * assumed terminals have no "descendant"
 */
function getTerminals(edges, nodes) {
    const terminals = [];
    if (nodes.length === 0)
        return terminals;
    if (nodes.length === 1 && nodes[0])
        terminals.push(nodes[0]);
    nodes.forEach((v) => {
        if (!edges.find((e) => { var _a; return v.name === ((_a = e.ancestry) === null || _a === void 0 ? void 0 : _a.name); }))
            terminals.push(v);
    });
    return terminals;
}
exports.getTerminals = getTerminals;
/*
 * assumed no circular
 * assumed entries have no "ancestry"
 */
function getEntries(edges, nodes) {
    const entries = [];
    if (nodes.length === 0)
        return entries;
    if (nodes.length === 1 && nodes[0])
        entries.push(nodes[0]);
    nodes.forEach((v) => {
        if (!edges.find((e) => { var _a; return v.name === ((_a = e.descendant) === null || _a === void 0 ? void 0 : _a.name); }))
            entries.push(v);
    });
    return entries;
}
exports.getEntries = getEntries;
exports.default = {
    getTerminals: getTerminals,
    getEntries: getEntries
};
//# sourceMappingURL=index.js.map