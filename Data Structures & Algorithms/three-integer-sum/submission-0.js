class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const res = [];
        nums.sort((a,b) => a-b);

        for (let i = 0; i < nums.length-2; i++) {
            if (i > 0 && nums[i] === nums[i-1]) continue;

            let j = i+1, k = nums.length-1;
            while (j < k) {
                const sum = nums[i] + nums[j] + nums[k];
                if (sum === 0) {
                    res.push([nums[i], nums[j], nums[k]]);
                    j++, k--;
                    while (nums[j] === nums[j-1]) j++;
                    while (nums[k] === nums[k+1]) k--;
                } else if (sum > 0) {
                    k--;
                } else {
                    j++;
                }
            }
        }

        return res;
    }
}
