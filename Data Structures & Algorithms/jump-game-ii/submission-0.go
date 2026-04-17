func jump(nums []int) int {
    step, end, farthest := 0, 0, 0

    for i := 0; i < len(nums)-1; i++ {
        if i+nums[i] > farthest {
            farthest = i+nums[i]
        }

        if i == end {
            step++
            end = farthest
        }
    }

    if farthest >= len(nums)-1 {
        return step
    }

    return step    
}