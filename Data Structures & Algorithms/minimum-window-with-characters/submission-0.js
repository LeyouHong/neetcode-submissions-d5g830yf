class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s.length < t.length) return "";
        let min = s.length+1, start = -1, end = -1;
        let missing = t.length, l = 0, r = 0;

        const map = {};
        for (let c of t) {
            map[c] = (map[c] ?? 0) + 1;
        }

        while (r < s.length) {
            if (s[r] in map && map[s[r]]-- > 0) {
                missing--;
            }

            while (missing === 0) {
                if (min > r-l+1) {
                    min = r-l+1;
                    start = l, end = r;
                }
                if (s[l] in map && map[s[l]]++ === 0) {
                    missing++;
                }
                l++;
            }
            r++;
        }

        return min === s.length+1 ? '' : s.substring(start, end+1);
    }
}
