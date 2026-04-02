class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        heights.push(0);
        const N = heights.length;
        let stack = [];
        let max = 0;

        for (let i = 0; i < N; i++) {
            while (stack.length && heights[stack[stack.length-1]] > heights[i]) {
                const H = heights[stack.pop()];
                max = Math.max(max, H * (i - 1 - (stack.length ? stack[stack.length-1] : -1)));
            }

            stack.push(i);
        }

        return max;
    }
}
