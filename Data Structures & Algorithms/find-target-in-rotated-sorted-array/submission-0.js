class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0, r = nums.length-1;

        while (l + 1 < r) {
            const m = l + ((r-l)>>1);

            if (nums[m] > nums[0]) {
                if (target >= nums[0] && target <= nums[m]) {
                    r = m;
                } else {
                    l = m+1;
                }
            } else {
                if (target >= nums[m] && target <= nums[nums.length-1]) {
                    l = m;
                } else {
                    r = m-1;
                }
            }
        }

        if (nums[l] === target) return l;
        if (nums[r] === target) return r;

        return -1;
    }
}
