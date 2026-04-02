class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let leftMost = 0, rightMost = 0;
        let l = 0, r = height.length-1;
        let res = 0;

        while (l < r) {
            leftMost = Math.max(leftMost, height[l]);
            rightMost = Math.max(rightMost, height[r]);

            if (leftMost < rightMost) {
                res += leftMost - height[l++];
            } else {
                res += rightMost - height[r--];
            }
        }

        return res;
    }
}
