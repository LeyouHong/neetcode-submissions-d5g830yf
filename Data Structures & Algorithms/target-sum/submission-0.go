func findTargetSumWays(nums []int, target int) int {
    memo := make(map[string]int)

    return dfs(nums, &memo, 0, target)
}

func dfs(nums []int, memo *map[string]int, idx, remain int) int {
    if idx == len(nums) {
        if remain == 0 {
            return 1
        }
        return 0
    }

    key := strconv.Itoa(idx)+"-"+strconv.Itoa(remain)
    if v, ok := (*memo)[key]; ok {
        return v
    }

    res := 0

    res += dfs(nums, memo, idx+1, remain+nums[idx])
    res += dfs(nums, memo, idx+1, remain-nums[idx])

    (*memo)[key] = res

    return res
}