class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [];

        dfs('', n, n);

        return res;


        function dfs(tmp, l, r) {
            if (l === 0 && r === 0) {
                res.push(tmp);
                return;
            }

            if (l > 0) dfs(tmp+'(', l-1, r);
            if (r > l) dfs(tmp+')', l, r-1); 
        }
    }
}
