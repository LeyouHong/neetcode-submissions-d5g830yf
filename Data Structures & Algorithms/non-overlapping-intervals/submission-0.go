func eraseOverlapIntervals(intervals [][]int) int {
    sort.Slice(intervals, func (i, j int) bool {
        return intervals[i][0] < intervals[j][0]
    })

    last, res := 0, 0

    for i := 1; i < len(intervals); i++ {
        if intervals[i][0] < intervals[last][1] {
            res++
            if intervals[i][1] < intervals[last][1] {
                last = i;
            }
        } else {
            last = i
        }
    }
    
    return res
}
