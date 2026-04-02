class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let max= 0;

        for (let num of nums) {
            if (set.has(num-1)) continue;

            let l = 1;
            while (set.has(++num)) l++;
            max = Math.max(max, l);
        }

        return max;
    }
}
