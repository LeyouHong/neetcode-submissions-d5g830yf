class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
        const cols = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
        const boxs = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const ch = board[i][j];
                if (ch === '.') continue;

                const bidx = ~~(i/3) * 3 + ~~(j/3);
                if (rows[i][ch] || cols[j][ch] || boxs[bidx][ch]) return false;
                rows[i][ch] = true;
                cols[j][ch] = true;
                boxs[bidx][ch] = true;
            }
        }

        return true;
    }
}
