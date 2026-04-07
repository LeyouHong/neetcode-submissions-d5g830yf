class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const root = {};
        let cnt = 0;

        for (let [u,v] of edges) {
            const [x,y] = [find(u), find(v)];

            if (x !== y) {
                root[x] = y;
                cnt++;
            }
        }

        return n - cnt;

        function find(x) {
            while (root[x] !== undefined) x = root[x];
            return x;
        }
    }
}
