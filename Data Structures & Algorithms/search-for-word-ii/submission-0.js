class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const root = {};
        const res = [];
        const m = board.length, n = board[0].length;

        for (let word of words) {
            let cur = root;
            for (let c of word) {
                cur[c] = cur[c] || {};
                cur = cur[c]
            }
            cur.word = word;
        }

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                dfs(i, j, root);
            }
        }

        return res;

        function dfs(i, j, node) {
            if (i < 0 || i >= m || j < 0 || j >= n || 
                board[i][j] === '#' || !node[board[i][j]]) {
                return;
            }

            let c = board[i][j];

            if (node[c].word) {
                res.push(node[c].word);
                node[c].word = null;
            }

            board[i][j] = '#';
            dfs(i+1, j, node[c]);
            dfs(i-1, j, node[c]);
            dfs(i, j+1, node[c]);
            dfs(i, j-1, node[c]);
            board[i][j] = c;
        }
    }
}
