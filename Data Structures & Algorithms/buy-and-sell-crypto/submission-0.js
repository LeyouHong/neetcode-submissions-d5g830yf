class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let res = 0, min = prices[0];

        for (let i = 1; i < prices.length; i++) {
            if (prices[i] > min) {
                res = Math.max(res, prices[i] - min);
            }
            min = Math.min(min, prices[i]);
        }

        return res;
    }
}
