func maxSubArray(nums []int) int {
    sum := 0
    max := math.MinInt32

    for _, num := range nums {
        sum += num

        if sum > max {
            max = sum
        }

        if sum < 0 {
            sum = 0
        }
    }

    return max
}
