func longestPalindrome(s string) string {
    n := len(s)
    maxL := 0
    startIdx := -1

    for i := 0; i < len(s); i++ {
        for {
            l,r := i,i
            for l >= 0 && r < n && s[l] == s[r] {
                l--
                r++
            }
            if (r-1) - (l+1) + 1 > maxL {
                maxL = (r-1) - (l+1) + 1
                startIdx = l+1
            }
            break
        }

        for {
            l,r := i,i+1
            for l >= 0 && r < n && s[l] == s[r] {
                l--
                r++
            }
            if (r-1) - (l+1) + 1 > maxL {
                maxL = (r-1) - (l+1) + 1
                startIdx = l+1
            }
            break
        }
    }

    return s[startIdx : startIdx+maxL]
}