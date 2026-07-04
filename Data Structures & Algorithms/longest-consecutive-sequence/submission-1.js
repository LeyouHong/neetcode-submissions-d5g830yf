class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let res = 0;
        const set = new Set(nums);

        for (let num of nums) {
            let t = num;
            while (set.has(t+1)) t++;
            res = Math.max(res, t - num + 1);
        }

        return res;
    }
}
