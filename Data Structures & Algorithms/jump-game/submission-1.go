func canJump(nums []int) bool {
    last := 0

    for i := 0; i < len(nums); i++ {
        if i > last {
            return false
        }

        last = max(last, i+nums[i])
        if last >= len(nums)-1 {
            return true
        }
    }

    return true
}

func max(a, b int) int {
    if a < b {
        return b
    }
    return a
}
