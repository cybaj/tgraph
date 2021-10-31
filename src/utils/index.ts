import type {ITEdge} from "../edge"
import type {TNode} from "../node"

/*
 * assumed no circular
 * assumed terminals have no "descendant"
 */
export function getTerminals<ContentType, EdgeType> (edges: ITEdge<ContentType, EdgeType>[], nodes: TNode<ContentType, EdgeType>[]) {
  const terminals: TNode<ContentType>[] = [];
  nodes.forEach((v) => {
    if (!edges.find((e) => v === e.ancestry)) terminals.push(v);
  })
  return terminals;
}

/*
 * assumed no circular
 * assumed entries have no "ancestry"
 */
export function getEntries<ContentType, EdgeType> (edges: ITEdge<ContentType, EdgeType>[], nodes: TNode<ContentType, EdgeType>[]) {
  const entries: TNode<ContentType>[] = [];
  nodes.forEach((v) => {
    if (!edges.find((e) => v === e.descendant)) entries.push(v);
  })
  return entries;
}
