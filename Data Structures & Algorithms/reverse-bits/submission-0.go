func reverseBits(n int) int {
    cnt, res := 0, 0

    for cnt < 32 {
        bit := (n >> cnt) & 1
        res = (res<<1) + bit
        cnt++
    }

    return res
}