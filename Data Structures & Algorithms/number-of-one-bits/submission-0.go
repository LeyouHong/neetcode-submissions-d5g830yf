func hammingWeight(n int) int {
    res := 0

    for i := 0; i < 32; i++ {
        res += (n >> i) & 1
    }

    return res
}
