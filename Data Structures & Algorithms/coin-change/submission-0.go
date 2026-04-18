func coinChange(coins []int, amount int) int {
    memo := make(map[int]int)

    r := dfs(coins, amount, &memo)

    if r == math.MaxInt32 {
        return -1
    }

    return r
}

func dfs(coins []int, remain int, memo *map[int]int) int {
    if remain == 0 {
        return 0
    }

    if v, ok := (*memo)[remain]; ok {
        return v
    }

    res := math.MaxInt32

    for _, coin := range coins {
        if remain < coin {
            continue
        }
        res = min(res, dfs(coins, remain - coin, memo)+1)
    }

    (*memo)[remain] = res

    return res
} 