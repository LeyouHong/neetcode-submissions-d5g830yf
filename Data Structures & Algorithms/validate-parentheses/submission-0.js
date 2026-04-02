class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        for (let c of s) {
            if (c === ')' || c === ']' || c === '}') {
                if (stack.length && stack[stack.length-1] === getPair(c)) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(c);
            }
        }

        return stack.length === 0;

        function getPair(ch) {
            if (ch === ')') return '(';
            if (ch === ']') return '[';
            if (ch === '}') return '{';
            return '';
        }
    }
}
