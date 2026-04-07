class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const root = {};

        for (let [u,v] of edges) {
            const [x,y] = [find(u), find(v)];

            if (x === y) return [u,v];
            
            root[x] = y;
        }

        return [];

        function find(x) {
            while (root[x] !== undefined) {
                x = root[x];
            }

            return x;
        }
    }
}
