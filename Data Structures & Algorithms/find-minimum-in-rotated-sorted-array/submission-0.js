class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        if (nums[0] < nums[nums.length-1]) {
            return nums[0];
        }

        let l = 0, r = nums.length-1;

        while (l + 1 < r) {
            const m = l + ((r-l)>>1);

            if (nums[m] > nums[0]) {
                l = m+1;
            } else {
                r = m;
            }
        }

        return Math.min(nums[l], nums[r]);
    }
}
