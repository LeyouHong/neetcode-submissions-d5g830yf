class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const m = board.length, n = board[0].length;

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (board[i][j] === word[0]) {
                    if (dfs(i,j,0)) return true
                }
            }
        }

        return false;

        function dfs(x, y, idx) {
            if (idx >= word.length) return true;
            if (x < 0 || x >= m || y < 0 || y >= n || board[x][y] !== word[idx]) {
                return false;
            }
            const c = board[x][y];
            board[x][y] = '.'
            const t = dfs(x+1, y, idx+1) || dfs(x-1, y, idx+1) || dfs(x, y+1, idx+1) || dfs(x, y-1, idx+1);
            board[x][y] = c;

            return t;
        }
    }
}
