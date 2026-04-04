class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];

        dfs([], 0, 0);

        return res;

        function dfs(tmp, sum, idx) {
            if (sum > target) return;
            if (sum === target) {
                res.push([...tmp]);
                return;
            }

            for (let i = idx; i < nums.length; i++) {
                tmp.push(nums[i]);
                dfs(tmp, sum+nums[i], i);
                tmp.pop();
            }
        }
    }
}
