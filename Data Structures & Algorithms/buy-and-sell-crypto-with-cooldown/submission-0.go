func maxProfit(prices []int) int {
    hold, sold, cooled := math.MinInt32, 0, 0

    for i := 0; i < len(prices); i++ {
        hold1, sold1, cooled1 := hold, sold, cooled
        p := prices[i]
        
        hold = max(hold1, cooled1-p)
        sold = hold1+p
        cooled = max(sold1, cooled1)
    }

    return max(sold, cooled)
}

/*
hold = max(hold, cooled-p)
sold = hold+p
cooled = max(sold, cooled)
*/