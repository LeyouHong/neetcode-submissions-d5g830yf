// import (
//     "math"
// )

func maxProduct(nums []int) int {
    preMax, preMin := nums[0], nums[0]
    res := nums[0]

    for i := 1; i < len(nums); i++ {
        curMax := max(nums[i], max(preMax * nums[i], preMin * nums[i]))
        curMin := min(nums[i], min(preMax * nums[i], preMin * nums[i]))

        res = max(res, curMax)

        preMax = curMax
        preMin = curMin
    }

    return res
}

func max(a, b int) int {
    if a < b {
        return b
    } 
    return a
}

func min(a, b int) int {
    if a < b {
        return a
    } 
    return b
}