/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (!node) {
        return;
    }
    const map = new Map();
    const clone = root => {
        // if root doesn't exist in the map
        if (!map.has(root.val)) {
            // set the key root.val to the value new Node
            map.set(root.val, new Node(root.val));
            // new Node (the clone) has property neighbors, make it map of (OG) roots neighbors
            // doing it this way we set neighbors as we move through the graph
            map.get(root.val).neighbors = root.neighbors.map(clone);
        }
        // why this return statement
        return map.get(root.val)
    }
    return clone(node);
};