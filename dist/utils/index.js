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
        if (!edges.find((e) => v === e.ancestry))
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
        if (!edges.find((e) => v === e.descendant))
            entries.push(v);
    });
    return entries;
}
exports.getEntries = getEntries;
//# sourceMappingURL=index.js.map