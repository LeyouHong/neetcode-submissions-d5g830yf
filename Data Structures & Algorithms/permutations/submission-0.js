class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const res = [];
        const used = new Set();

        dfs([]);

        return res;

        function dfs(tmp) {
            if (tmp.length === nums.length) {
                res.push([...tmp]);
                return;
            }

            for (let v of nums) {
                if (used.has(v)) continue;
                used.add(v);
                tmp.push(v);
                dfs(tmp);
                tmp.pop();
                used.delete(v);
            }
        }
    }
}
