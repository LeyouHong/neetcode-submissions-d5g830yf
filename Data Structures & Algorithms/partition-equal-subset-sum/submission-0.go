func canPartition(nums []int) bool {
    n := len(nums)
    sum := 0
    for _, v := range nums {
        sum += v
    }

    if sum % 2 == 1 {
        return false
    }

    target := sum / 2

    dp := make([][]bool, n+1)
    for i := 0; i < n+1; i++ {
        dp[i] = make([]bool, target+1)
    }
    dp[0][0] = true

    for i := 0; i < n+1; i++ {
        dp[i][0] = true
    }
    for j := 0; j < target+1; j++ {
        dp[0][j] = false
    }

    for i := 1; i < n+1; i++ {
        for j := 1; j < target+1; j++ {
            if j >= nums[i-1] {
                dp[i][j] = dp[i-1][j] || dp[i-1][j-nums[i-1]]
            } else {
                dp[i][j] = dp[i-1][j]
            }
            if dp[i][target] {
                return true
            }
        }
    }

    return false
}

/*
       1 5 11 5 
     1
     2
     3
     4
     5
     6
     7
     8
     9
     10
     11     
*/