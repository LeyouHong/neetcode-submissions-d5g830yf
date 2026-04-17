func canCompleteCircuit(gas []int, cost []int) int {
    start, remain, debet := 0, 0, 0

    for i := 0; i < len(gas); i++ {
        remain += gas[i] - cost[i]
        if remain < 0 {
            debet += remain
            remain = 0
            start = i+1
        }
    }

    if debet + remain >= 0 {
        return start
    }

    return -1
}