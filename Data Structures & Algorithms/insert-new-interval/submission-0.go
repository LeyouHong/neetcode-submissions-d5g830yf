func insert(intervals [][]int, newInterval []int) [][]int {
    res := [][]int{}
    used := false

    for _, interval := range intervals {
        if used || newInterval[0] > interval[1] {
            res = append(res, interval)
        } else if !used && newInterval[1] < interval[0] {
            res = append(res, newInterval)
            res = append(res, interval)
            used = true
        } else {
            newInterval[0] = min(newInterval[0], interval[0])
            newInterval[1] = max(newInterval[1], interval[1])
        }
    }

    if !used {
        res = append(res, newInterval)
    }

    return res
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}

func max(a, b int) int {
    if a < b {
        return b
    }
    return a
}