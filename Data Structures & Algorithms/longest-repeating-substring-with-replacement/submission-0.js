class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const cnt = {};
        let l = 0, maxf = 0, res = 0;

        for (let r = 0; r < s.length; r++) {
            cnt[s[r]] = (cnt[s[r]] ?? 0) + 1;
            maxf = Math.max(maxf, cnt[s[r]]);

            while (r - l + 1 - maxf > k) {
                cnt[s[l++]]--;
            }
            res = Math.max(res, r-l+1);
        }

        return res;
    }
}
