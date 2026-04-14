func countBits(n int) []int {
    res := []int{}

    for i := 0; i <= n; i++ {
        t := 0
        for j:=0; j < 32; j++ {
            bit := (i >> j) & 1
            if bit > 0 {
                t++
            }
        }
        res = append(res, t)
    }

    return res
}
