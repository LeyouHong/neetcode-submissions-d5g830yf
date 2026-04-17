func partitionLabels(s string) []int {
    charMap := make(map[byte]int)
    res := []int{}
    rightMost := -1
    l, r := 0, 0

    for i := 0; i < len(s); i++ {
        charMap[s[i]] = i
    }

    for r < len(s) {
        currRight := charMap[s[r]]
        rightMost = max(rightMost, currRight)

        if r == rightMost {
            res = append(res, r-l+1)
            l = r+1
        }
        r++
    }

    return res
}

func max(a, b int) int {
    if a < b {
        return b
    }
    return a
}
