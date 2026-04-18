func lengthOfLIS(nums []int) int {
    n := len(nums)
    dp := make([]int, n)
    maxV := 0

    for i:=0; i < n; i++ {
        dp[i] = 1
        for j:=0; j < i; j++ {
            if nums[i] > nums[j] {
                dp[i] = max(dp[i], dp[j]+1)
            }
        }
        if dp[i] > maxV {
            maxV = dp[i]
        }
    }

    return maxV
}

func max(a, b int) int {
    if a < b {
        return b
    }
    return a
}

/*
[9,1,4,2,3,3,7]
       j.  i
    if nums[i] > nums[j]
        dp[i] = max(dp[i], dp[j]+1)
*/