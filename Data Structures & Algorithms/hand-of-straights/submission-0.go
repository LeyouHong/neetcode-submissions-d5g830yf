func isNStraightHand(hand []int, groupSize int) bool {
    if len(hand) % groupSize != 0 {
        return false
    }

    cnt := make(map[int]int)
    sort.Ints(hand)

    for _, v := range hand {
        cnt[v]++
    }

    total := 0
    for _, v := range hand {
        if cnt[v] > 0 {
            total++
            for idx := 0; idx < groupSize; idx++ {
                if cnt[v] <= 0 {
                    return false
                } else {
                    cnt[v]--
                }
                v++
            }
        }
    }

    return total == len(hand) / groupSize
}