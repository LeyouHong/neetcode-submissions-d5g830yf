class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const N = cost.length+1;
        const dp = Array(N).fill(0);

        dp[0] = 0, dp[1] = 0;

        for (let i = 2; i< dp.length; i++) {
            dp[i] = Math.min(dp[i-2] + cost[i-2], dp[i-1] + cost[i-1]);
        }

        return dp[dp.length-1];
    }
}
