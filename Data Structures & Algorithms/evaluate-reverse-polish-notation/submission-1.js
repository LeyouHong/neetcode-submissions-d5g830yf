class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(s) {
        const stack = [];

        for (let c of s) {
            if (c === '+' || c === '-' || c === '*' || c === '/') {
                const n2 = stack.pop();
                const n1 = stack.pop();
                let t;

                switch (c) {
                    case '+':
                        t = n1 + n2;
                        break;
                    case '-':
                        t = n1 - n2;
                        break;
                    case '*':
                        t = n1 * n2;
                        break;
                    case '/':
                        t = ~~(n1 / n2);
                        break;
                    default:
                        break;
                }

                stack.push(t);
            } else {
                stack.push(parseInt(c));
            }
        } 

        return stack[0];
    }
}
