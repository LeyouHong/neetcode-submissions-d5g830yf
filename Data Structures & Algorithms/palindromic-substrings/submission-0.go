func countSubstrings(s string) int {
    res := 0

    for i := 0; i < len(s); i++ {
        dfs(s, i, i, &res)
        dfs(s, i, i+1, &res)
    }

    return res
}

func dfs(s string, i, j int, res *int) {
    for i >= 0 && j < len(s) && s[i] == s[j] {
        *res++
        i--
        j++
    }
}