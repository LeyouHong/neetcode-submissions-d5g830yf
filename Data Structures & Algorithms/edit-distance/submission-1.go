func minDistance(w1 string, w2 string) int {
    m, n := len(w1), len(w2)
    dp := make([][]int, m+1)
    for i := 0; i <= m; i++ {
        dp[i] = make([]int, n+1)
    }

    dp[0][0] = 0

    for i := 1; i <= m; i++ {
        dp[i][0] = i
    }
    for j := 1; j <= n; j++ {
        dp[0][j] = j
    }

    for i := 1; i <= m; i++ {
        for j := 1; j <= n; j++ {
            if w1[i-1] == w2[j-1] {
                dp[i][j] = dp[i-1][j-1]
            } else {
                dp[i][j] = min(dp[i-1][j-1], min(dp[i-1][j], dp[i][j-1])) + 1
            }
        }
    }

    return dp[m][n]
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}

/*
   "" r o s
"" 0. 1 2 3
h  1  1 2 3
o  2. 2 1 2
r. 3. 2 2 2
s. 4  3 3 2
e. 5. 4 4 3

if w1[i] == w2[j]
    dp[i][j] = min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1])
else
    dp[i][j] = min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1])+1
*/