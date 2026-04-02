class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0, r = heights.length-1;
        let max = 0;

        while (l < r) {
            const v = Math.min(heights[l], heights[r]) * (r - l);
            max = Math.max(max, v);
            if (heights[l] < heights[r]) l++;
            else r--;
        }

        return max;
    }
}
