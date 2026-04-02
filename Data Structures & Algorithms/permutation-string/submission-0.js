class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        let l = 0, r = 0, missing = s1.length;

        const cnt1 = {};
        for (let c of s1) cnt1[c] = (cnt1[c] ?? 0) + 1;

        while (r < s2.length) {
            if (s2[r] in cnt1 && cnt1[s2[r]]-- > 0) {
                missing--;
            }

            if (missing === 0) return true;

            if (r - l + 1 === s1.length) {
                if (s2[l] in cnt1 && cnt1[s2[l]]++ >= 0) {
                    missing++;
                }
                l++
            }
            r++;
        }

        return false;
    }
}
