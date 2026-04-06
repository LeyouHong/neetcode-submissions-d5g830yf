class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const INF = 2147483647;
        const m = grid.length, n = grid[0].length;
        const dirs = [[-1, 0], [1, 0], [0, 1], [0, -1]];
        const q = [];

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 0) {
                    q.push([i, j]);
                }
            }
        }

        while (q.length) {
            const len = q.length;
            for (let i = 0; i < len; i++) {
                const [x, y] = q.shift();
                const nextVal = grid[x][y]+1;
                for (let dir of dirs) {
                    const [nx, ny] = [dir[0]+x, dir[1]+y];
                    if (nx < 0 || nx >= m || ny < 0 || ny >= n ||
                        grid[nx][ny] !== INF) {
                            continue;
                        }
                    grid[nx][ny] = nextVal;
                    q.push([nx, ny]);
                }
            }
        }

        return grid;
    }
}
