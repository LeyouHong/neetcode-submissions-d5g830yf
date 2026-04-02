class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        for (let i = 0; i < numbers.length-1; i++) {
            const rIdx = binarySearch(numbers, i+1, numbers.length, target-numbers[i]);
            if (rIdx !== -1) {
                return [i+1, rIdx+1];
            }
        }

        return [];

        function binarySearch(nums, l, r, t) {
            while (l < r) {
                const m = l + ((r-l) >> 1);
                if (nums[m] === t) return m;
                if (nums[m] < t) {
                    l = m+1;
                } else {
                    r = m;
                }
            }

            return nums[l] === t ? l : -1;
        }
    }
}
