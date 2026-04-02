class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const M = matrix.length;
        const N = matrix[0].length;

        let l = 0, r = M*N;

        while (l < r) {
            const m = l + ((r-l)>>1);
            const i = ~~(m / N);
            const j = m % N;

            if (matrix[i][j] === target) return true;

            if (matrix[i][j] < target) {
                l = m+1;
            } else {
                r = m;
            }
        }

        return false;
    }
}
