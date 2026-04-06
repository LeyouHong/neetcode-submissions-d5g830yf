class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const m = grid.length, n = grid[0].length;
        const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
        let cnt = 0;
        const q = [];

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 2) {
                    q.push([i,j]);
                } else {
                    if(grid[i][j] === 1) cnt++;
                }
            }
        }

        let res = 0;

        while (q.length) {
            const len = q.length;
            for (let i = 0; i < len; i++) {
                const [x, y] = q.shift();

                for (let dir of dirs) {
                    const [nx, ny] = [x+dir[0], y+dir[1]];
                    if (nx < 0 || nx >= m || ny < 0 || ny >= n || grid[nx][ny] !== 1) {
                        continue;
                    }
                    grid[nx][ny] = 2;
                    q.push([nx,ny]);
                    cnt--;
                }
            }
            if (q.length)
                res++;
        }

        if (cnt > 0) return -1;

        return res;
    }
}
