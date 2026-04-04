class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (!digits.length) return [];
        
        const map = {
            2: 'abc',
            3: 'def',
            4: 'ghi',
            5: 'jkl',
            6: 'mno',
            7: 'pqrs',
            8: 'tuv',
            9: 'wxyz'
        }

        let res = [''];

        for (let d of digits) {
            let tmp = [];
            for (let r of res) {
                for (let c of map[d]) {
                    tmp.push(r+c);
                }
            }
            res = tmp;
        }

        return res;
    }
}
