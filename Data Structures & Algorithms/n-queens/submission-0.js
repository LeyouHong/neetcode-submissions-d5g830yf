class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const board = Array.from({length: n}, () => Array(n).fill('.'));
        const res = [];

        dfs(board, 0);

        return res;

        function dfs(board, col) {
            if (col >= n) {
                res.push(build(board));
                return;
            }

            for (let i = 0; i < n; i++) {
                if (!validation(board, i, col)) {
                    continue;
                }
                board[i][col] = 'Q';
                dfs(board, col+1);;
                board[i][col] = '.';
            }
        }

        function validation(board, r, c) {
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < c; j++) {
                    if (board[i][j] !== 'Q') continue;
                    if (i === r || i-r === j-c || i+j === r+c) return false;
                }
            }
            return true;
        }

        function build(board) {
            const tmp = [];
            for (let row of board) {
                tmp.push(row.join(''));
            }
            return tmp;
        }
    }
}
