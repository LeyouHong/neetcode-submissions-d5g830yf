class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [];

        dfs([], 0);

        return res;

        function dfs(tmp, idx) {
            res.push([...tmp]);

            for (let i = idx; i < nums.length; i++) {
                tmp.push(nums[i]);
                dfs(tmp, i+1);
                tmp.pop();
            }
        }
    }
}
