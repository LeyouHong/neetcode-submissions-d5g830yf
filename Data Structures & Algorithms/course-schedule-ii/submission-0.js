class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const map = {}, seen = new Set(), seeing = new Set();
        const res = [];

        for (let [u, v] of prerequisites) {
            map[u] = map[u] || [];
            map[u].push(v);
        }

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) return [];
        }

        return res;

        function dfs(c) {
            if (seen.has(c)) return true;
            if (seeing.has(c)) return false;

            seeing.add(c);

            for (let n of map[c] || []) {
                if (!dfs(n)) return false;
            }

            seeing.delete(c);
            seen.add(c);
            res.push(c);

            return true;
        }
    }
}
