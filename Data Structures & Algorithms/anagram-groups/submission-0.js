class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};

        for (let str of strs) {
            const key = getKey(str);
            map[key] = map[key] || [];
            map[key].push(str);
        }

        return Object.values(map);

        function getKey (str) {
            return str.split('').sort((a,b) => a.localeCompare(b)).join('');
        }
    }
}
