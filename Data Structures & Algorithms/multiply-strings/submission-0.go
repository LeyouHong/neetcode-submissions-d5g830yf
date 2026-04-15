// import "strconv"

func multiply(num1 string, num2 string) string {
    if num1 == "0" || num2 == "0" {
        return "0"
    }

    m, n := len(num1), len(num2)
    res := make([]int, m+n)

    for i := m - 1; i >= 0; i-- {
        a := int(num1[i] - '0')

        for j := n - 1; j >= 0; j-- {
            b := int(num2[j] - '0')

            sum := a*b + res[i+j+1]

            res[i+j+1] = sum % 10
            res[i+j] += sum / 10
        }
    }

    // 转 string
    result := ""
    for _, v := range res {
        if !(len(result) == 0 && v == 0) {
            result += strconv.Itoa(v)
        }
    }

    return result
}