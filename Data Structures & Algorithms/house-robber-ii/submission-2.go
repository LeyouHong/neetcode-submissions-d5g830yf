func rob(nums []int) int {
    n := len(nums)
    if n == 1 {
        return nums[0]
    }

    f1, f2 := 0, 0
    leftSum, rightSum := 0, 0
    tmp := 0;

    for i := 0; i < n-1; i++ {
        tmp = max(f1 + nums[i], f2)
        f1 = f2
        f2 = tmp
    }

    leftSum = f2

    f1, f2 = 0, 0
    tmp = 0
    for i := 1; i < n; i++ {
        tmp = max(f1 + nums[i], f2)
        f1 = f2
        f2 = tmp
    }

    rightSum = f2

    return max(leftSum, rightSum)
}

func max(a, b int) int {
    if a < b {
        return b
    }

    return a
}