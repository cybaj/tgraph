"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEntries = exports.getTerminals = void 0;
/*
 * assumed no circular
 * assumed terminals have no "descendant"
 */
function getTerminals(edges, nodes) {
    const terminals = [];
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
    nodes.forEach((v) => {
        if (!edges.find((e) => { var _a; return v.name === ((_a = e.descendant) === null || _a === void 0 ? void 0 : _a.name); }))
            entries.push(v);
    });
    return entries;
}
exports.getEntries = getEntries;
//# sourceMappingURL=index.js.map