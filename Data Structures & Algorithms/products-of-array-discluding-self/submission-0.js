class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const N = nums.length;
        const res = Array(N).fill(1);

        let tmp = 1;

        for (let i = 0; i < N; i++) {
            res[i] = tmp;
            tmp *= nums[i];
        }

        tmp = 1;
        for (let i = N-1; i>=0; i--) {
            res[i] *= tmp;
            tmp *= nums[i];
        }

        return res;
    }
}

/**
 * [1,2,4,6]
 *  
 * [1,1,2,8]
 * 
 * 
 */