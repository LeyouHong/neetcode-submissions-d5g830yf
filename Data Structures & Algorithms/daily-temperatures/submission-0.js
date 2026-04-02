class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(T) {
        const stack = [];
        const res = Array(T.length).fill(0);
        
        for (let i = 0; i < T.length; i++) {
            if (!stack.length || T[stack[stack.length-1]] >= T[i]) {
                stack.push(i);
            } else {
                while (stack.length && T[stack[stack.length-1]] < T[i]) {
                    const idx = stack.pop();
                    res[idx] = i - idx;
                }
                stack.push(i);
            }
        }

        return res;
    }
}
