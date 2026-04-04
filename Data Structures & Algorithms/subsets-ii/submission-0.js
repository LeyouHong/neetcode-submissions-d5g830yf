class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a,b) => a-b);

        const res = [];

        dfs([], 0);

        return res;

        function dfs(tmp, idx) {
            res.push([...tmp]);

            for (let i = idx; i < nums.length; i++) {
                if (i > idx && nums[i] === nums[i-1]) continue;
                tmp.push(nums[i]);
                dfs(tmp, i+1);
                tmp.pop();
            }
        }
    }
}
