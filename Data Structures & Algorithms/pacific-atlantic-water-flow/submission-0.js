class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(matrix) {
        if (!matrix || matrix.length === 0 || matrix[0].length === 0) return [];
        const dirs = [[0,1], [1,0], [-1,0], [0,-1]];
        const m = matrix.length, n = matrix[0].length;
        const visitedLU = new Set();
        const visitedRD = new Set();
        const res = [];
        
        for (let i = 0; i < m; i++) {
            dfs(i, 0, visitedLU);
            dfs(i, n-1, visitedRD);
        }
        for (let j = 0; j < n; j++) {
            dfs(0, j, visitedLU);
            dfs(m-1, j, visitedRD);
        }
        
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (visitedLU.has(i+' '+j) && visitedRD.has(i+' '+j)) {
                    res.push([i, j]);
                }
            }
        }
        
        return res;
        
        function dfs(i, j, visited) {
            visited.add(i+' '+j);
            for (let k = 0; k < dirs.length; k++) {
                let nx = i + dirs[k][0];
                let ny = j + dirs[k][1];
                if (nx >= 0 && nx < m && ny >= 0 && ny < n && !visited.has(nx+' '+ny) && matrix[nx][ny] >= matrix[i][j]) {
                    dfs(nx, ny, visited);
                }
            }
        }
    }
}
