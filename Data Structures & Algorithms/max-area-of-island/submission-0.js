class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const m = grid.length, n = grid[0].length;
        let res = 0;

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 1) {
                    const s = dfs(i, j);
                    res = Math.max(res, s);
                }
            }
        }

        return res;

        function dfs(i, j) {
            if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === 0) return 0;

            grid[i][j] = 0;
            let sum = 1+dfs(i+1, j) + dfs(i-1, j) + dfs(i, j+1) + dfs(i, j-1);

            return sum;
        }
    }
}
