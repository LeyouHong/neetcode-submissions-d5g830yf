/**
 * Definition of Interval:
 * type Interval struct {
 *    start int
 *    end   int
 * }
 */
//  import (
//     "sort"
//  )

func canAttendMeetings(intervals []Interval) bool {
    m := make(map[int]int)
    keys := []int{}

    for _, interval := range intervals {
        m[interval.start]++
        m[interval.end]--
        keys = append(keys, interval.start)
        keys = append(keys, interval.end)
    }

    sort.Slice(keys, func (i, j int) bool {
        return keys[i] < keys[j]
    })

    res := 0;

    for _, v := range keys {
        res += m[v]
        if res > 1 {
            return false
        }
    }

    return true
}
