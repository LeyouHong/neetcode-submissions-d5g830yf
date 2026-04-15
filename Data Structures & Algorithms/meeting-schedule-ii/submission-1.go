/**
 * Definition of Interval:
 * type Interval struct {
 *    start int
 *    end   int
 * }
 */

func minMeetingRooms(intervals []Interval) int {
    m := make(map[int]int)
    keys := []int{}

    for _, interval := range intervals {
        if _, ok := m[interval.start]; !ok {
            keys = append(keys, interval.start)
        }
        if _, ok := m[interval.end]; !ok {
            keys = append(keys, interval.end)
        }

        m[interval.start]++
        m[interval.end]--
    }

    sort.Slice(keys, func (i, j int) bool {
        return keys[i] < keys[j]
    })

    res := 0;
    max := 0

    for _, v := range keys {
        res += m[v]
        if res > max {
            max = res
        }
    }

    return max
}
