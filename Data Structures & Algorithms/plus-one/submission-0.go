func plusOne(digits []int) []int {
    carry := 1
    i := len(digits)-1

    for i >= 0 {
        sum := carry + digits[i]
        digits[i] = sum % 10
        carry = sum / 10
        i--
    }
    
    if carry > 0 {
        digits = append([]int{1}, digits...)
    }
    

    return digits
}