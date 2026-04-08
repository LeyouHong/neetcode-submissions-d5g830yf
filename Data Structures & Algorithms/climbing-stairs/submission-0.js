class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let f1 = 1, f2 = 2;
        if (n === 1) return f1;
        if (n === 2) return f2

        for (let i = 3; i <= n; i++) {
            let f3 = f1 + f2;
            f1 = f2;
            f2 = f3;
        }

        return f2;
    }
}
