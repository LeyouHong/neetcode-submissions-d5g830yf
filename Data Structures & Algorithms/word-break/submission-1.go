func wordBreak(s string, wordDict []string) bool {
    n := len(s)
    dp := make([]bool, n+1)
    dp[0] = true
    set := make(map[string]struct{})

    for _, v := range wordDict {
        set[v] = struct{}{}
    }

    for i := 0; i < n; i++ {
        for j := 0; j <= i; j++ {
            if _, ok := set[string(s[j:i+1])]; ok && dp[j] {
                dp[i+1] = true
            }
        }
    }
    // fmt.Println(dp)
    return dp[n]
}

/*
neetcode
j  i
*/
