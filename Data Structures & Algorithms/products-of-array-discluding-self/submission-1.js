class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const N = nums.length;
        const res = Array(N).fill(1);
        let prev = 1;

        for (let i = 0; i < N; i++) {
            res[i] = prev;
            prev *= nums[i];
        }
        
        prev = 1;
        for (let i = N-1; i>=0; i--) {
            res[i] *= prev;
            prev *= nums[i];
        }

        return res;
    }
}

/**
 * [1,2,4,6]
 *    
 * [1, 1, 2, 8]
 * [48,24,6, 1]
 * 
 */