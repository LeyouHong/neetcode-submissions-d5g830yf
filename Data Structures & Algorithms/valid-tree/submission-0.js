class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        const root = {};

        for (let [u, v] of edges) {
            const [x, y] = [find(u), find(v)];
            if (x === y) {
                return false;
            }
            root[x] = y;
        }

        return n === edges.length+1;

        function find(x) {
            while (root[x] !== undefined) {
                x = root[x];
            }
            return x;
        }
    }
}
