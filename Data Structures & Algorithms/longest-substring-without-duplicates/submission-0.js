class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const set = new Set();
        let l = 0, r = 0;
        let res = 0;

        while (r < s.length) {
            if (set.has(s[r])) {
                set.delete(s[l++]);
            } else {
                set.add(s[r]);
                res = Math.max(res, set.size);
                r++;
            }
        }

        return res;
    }

    /**
     *      z x y z x y z
     *      j
     * {zxy}.     i
     */
}
