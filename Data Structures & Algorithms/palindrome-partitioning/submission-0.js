class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const res = [];
        dfs([], 0);

        return res;

        function dfs(tmp, idx) {
            if (idx >= s.length) {
                res.push([...tmp]);
                return;
            }

            for (let i = idx; i < s.length; i++) {
                if (!isPalindrome(s, idx, i)) continue;
                tmp.push(s.substring(idx, i+1));
                dfs(tmp, i+1);
                tmp.pop();
            }
        }

        function isPalindrome(s, i, j) {
            while (i < j) {
                if (s[i] !== s[j]) return false;
                i++, j--;
            }
            return true;
        }
    }
}
