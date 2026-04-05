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
                    if(dfs(i, j, 0)) return true;
                }
            }
        }

        return false;

        function dfs(i, j, idx) {
            if (idx === word.length) {
                return true;
            }

            if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[idx]) {
                return false;
            }

            let t = board[i][j];
            board[i][j] = '#';

            let result = dfs(i+1, j, idx+1) || dfs(i-1, j, idx+1) ||
                         dfs(i, j+1, idx+1) || dfs(i, j-1, idx+1);
            board[i][j] = t;
            return result;
        }
    }
}
