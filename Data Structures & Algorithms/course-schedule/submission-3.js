class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const map = {}, seen = new Set(), seeing = new Set();

        for (let [u, v] of prerequisites) {
            map[u] = map[u] || [];
            map[u].push(v);
        }

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) return false;
        }

        return true;

        function dfs(c) {
            if (seen.has(c)) return true;
            if (seeing.has(c)) return false;

            seeing.add(c);

            for (let n of map[c] || []) {
                if (!dfs(n)) return false;
            }

            seeing.delete(c);
            seen.add(c);

            return true;
        }
    }
}
