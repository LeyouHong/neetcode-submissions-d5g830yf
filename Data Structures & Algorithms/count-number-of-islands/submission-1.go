func numIslands(grid [][]byte) int {
    m, n := len(grid), len(grid[0])
    res := 0

    for i := 0; i < m; i++ {
        for j := 0; j < n; j++ {
            if grid[i][j] == byte('1') {
                dfs(grid, i, j)
                res++
            }
        }
    }

    return res
}

func dfs(grid [][]byte, i, j int) {
    m, n := len(grid), len(grid[0])
    if i < 0 || i >= m || j < 0 || j >= n || grid[i][j] != byte('1') {
        return
    }

    grid[i][j] = byte('0')

    dfs(grid, i+1, j)
    dfs(grid, i-1, j)
    dfs(grid, i, j+1)
    dfs(grid, i, j-1)
}
