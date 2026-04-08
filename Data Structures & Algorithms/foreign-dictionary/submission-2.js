class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        const map = {};
        words.forEach(w => w.split('').forEach(c => map[c] = new Set()));

        // ✅ 只比较相邻单词
        for (let i = 0; i < words.length - 1; i++) {
            const word1 = words[i];
            const word2 = words[i + 1];

            // ✅ prefix invalid case
            if (word1.length > word2.length && word1.startsWith(word2)) {
                return '';
            }

            for (let k = 0; k < Math.min(word1.length, word2.length); k++) {
                const first = word1[k], second = word2[k];
                if (first === second) continue;

                // ✅ 修正方向：first -> second
                map[first].add(second);
                break;
            }
        }

        const seen = new Set();
        const seeing = new Set();
        let res = [];

        for (let key in map) {
            if (!dfs(key)) return '';
        }

        // ✅ reverse topo order
        return res.reverse().join('');

        function dfs(ch) {
            if (seen.has(ch)) return true;
            if (seeing.has(ch)) return false;

            seeing.add(ch);

            for (let n of map[ch]) {
                if (!dfs(n)) return false;
            }

            seeing.delete(ch);
            seen.add(ch);
            res.push(ch);

            return true;
        }
    }
}