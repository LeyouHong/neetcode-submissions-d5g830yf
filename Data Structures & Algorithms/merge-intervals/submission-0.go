func merge(intervals [][]int) [][]int {
    sort.Slice(intervals, func (i, j int) bool {
        if intervals[i][0] == intervals[j][0] {
            return intervals[i][1] < intervals[j][1]
        }
        return intervals[i][0] < intervals[j][0]
    })

    res := [][]int{}

    for i, interval := range intervals {
        if i == 0 || interval[0] > res[len(res)-1][1] {
            res = append(res, interval)
        } else {
            res[len(res)-1][1] = max(res[len(res)-1][1], interval[1])
        }
    }

    return res
}

func max(a, b int) int {
    if a < b {
        return b
    }
    return a
}
