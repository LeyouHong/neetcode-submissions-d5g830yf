/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) return null;

        const cache = new Map();
        const q = [node];

        while (q.length) {
            const len = q.length;
            for (let i = 0; i < len; i++) {
                const n = q.shift();
                if (cache.has(n)) continue;
                cache.set(n, new Node(n.val, []));
                for (let child of n.neighbors) {
                    q.push(child);
                }
            }
        }

        for (let oldNode of cache.keys()) {
            const copyNode = cache.get(oldNode);

            for (let child of oldNode.neighbors) {
                copyNode.neighbors.push(cache.get(child));
            }
        }

        return cache.get(node);
    }
}
