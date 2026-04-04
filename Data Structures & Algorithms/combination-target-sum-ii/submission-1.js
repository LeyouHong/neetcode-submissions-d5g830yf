class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort((a,b) => a-b);
        const res = [];

        dfs([], 0, 0);

        return res;

        function dfs(tmp, sum, idx) {
            if (sum > target) return;
            if (sum === target) {
                res.push([...tmp]);
                return;
            }

            for (let i = idx; i < candidates.length; i++) {
                if (i > idx && candidates[i] === candidates[i-1]) continue;
                tmp.push(candidates[i]);
                dfs(tmp, sum+candidates[i], i+1);
                tmp.pop();
            }
        }
    }
}
