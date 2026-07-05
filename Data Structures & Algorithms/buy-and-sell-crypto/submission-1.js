class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let min = Infinity;
        let res = 0;

        for (let price of prices) {
            res = Math.max(res, price - min);
            min = Math.min(min, price);
        }

        return res
    }
}
