class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const q = [], res = [];

        for (let i = 0; i < nums.length; i++) {
            if (q.length && q[0] === i-k) q.shift();

            while (q.length && nums[q[q.length-1]] < nums[i]) {
                q.pop();
            }
            q.push(i);

            if (i >= k-1) res.push(nums[q[0]]);
        }

        return res;
    }
}
