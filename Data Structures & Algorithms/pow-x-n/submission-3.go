func myPow(x float64, n int) float64 {
    if x == 0.0 {
        return 0.0
    }

    if n == 0 {
        return 1
    }

    if n == 1 {
        return x
    }

    if (n < 0) {
        return myPow(1/x, -n)
    }

    t := myPow(x*x, n/2)
    if n % 2 == 1 {
        return t * x
    }

    return t
}
