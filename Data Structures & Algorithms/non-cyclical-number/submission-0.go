func isHappy(n int) bool {
    fast, slow := n, n

    for fast != 1 {
        fast = getNext(getNext(fast))
        slow = getNext(slow)

        if fast == slow && fast != 1 {
            return false
        }
    }

    return true
}

func getNext(n int) int {
    res := 0

    for n > 0 {
        m := n % 10
        res += m * m
        n = n / 10
    }

    return res
}