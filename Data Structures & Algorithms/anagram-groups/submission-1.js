class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const primes = {'a': 2, 'b': 3, 'c': 5, 'd': 7, 'e': 11, 'f': 13, 'g': 17, 'h': 19, 'i': 23, 'j': 29, 'k': 31, 'l': 41, 'm': 43, 'n': 47, 'o': 53, 'p': 59, 'q': 61, 'r': 67, 's': 71, 't': 73, 'u': 79, 'v': 83, 'w': 89, 'x': 97, 'y': 101, 'z':103};
    
        const map = {};
        for (let str of strs) {
            let key = getKey(str);
            map[key] = map[key] || [];
            map[key].push(str);
        }
        
        return Object.values(map);
        
        function getKey(s) {
            let res = 1;
            for (let c of s) {
                res *= primes[c];
            }
            
            return res;
        }
    }
}
