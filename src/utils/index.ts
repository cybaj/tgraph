import type {ITEdge} from "../edge"
import type {TNode} from "../node"
import type {TEdgeType} from "../index.d"

/*
 * assumed no circular
 * assumed terminals have no "descendant"
 */
export function getTerminals<ContentType, EdgeType, EdgeContentType> (edges: ITEdge<ContentType, EdgeType, EdgeContentType>[], nodes: TNode<ContentType, TEdgeType<ContentType, EdgeType>>[]) {
  const terminals: TNode<ContentType, TEdgeType<ContentType, EdgeType>>[] = [];
  if (nodes.length === 0) return terminals
  if (nodes.length === 1 && nodes[0]) terminals.push(nodes[0])
  nodes.forEach((v) => {
    if (!edges.find((e) => v.name === e.ancestry?.name)) terminals.push(v);
  })
  return terminals;
}

/*
 * assumed no circular
 * assumed entries have no "ancestry"
 */
export function getEntries<ContentType, EdgeType, EdgeContentType> (edges: ITEdge<ContentType, EdgeType, EdgeContentType>[], nodes: TNode<ContentType, EdgeType>[]) {
  const entries: TNode<ContentType>[] = [];
  if (nodes.length === 0) return entries
  if (nodes.length === 1 && nodes[0]) entries.push(nodes[0])
  nodes.forEach((v) => {
    if (!edges.find((e) => v.name === e.descendant?.name)) entries.push(v);
  })
  return entries;
}

export default {
  getTerminals: getTerminals,
  getEntries: getEntries
}
