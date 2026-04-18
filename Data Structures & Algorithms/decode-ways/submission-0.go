// import (
//     "strconv"
// )

func numDecodings(s string) int {
    n := len(s)
    dp := make([]int, n+1)

    dp[0] = 1
    if s[0] == byte('0') {
        dp[1] = 0
    } else {
        dp[1] = 1
    }

    for i := 2; i < n+1; i++ {
        num1, _ := strconv.Atoi(s[i-1:i])
        num2, _ := strconv.Atoi(s[i-2:i])

        if num1 >= 1 && num1 <= 9 {
            dp[i] += dp[i-1]
        }
        if num2 >= 10 && num2 <= 26 {
            dp[i] += dp[i-2]
        }
    }

    return dp[n]
}