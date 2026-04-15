func spiralOrder(matrix [][]int) []int {
    m, n := len(matrix), len(matrix[0])
    top, right, bottom, left := 0, n-1, m-1, 0
    res := []int{}

    for left <= right && top <= bottom {
        // left -> right
        for j := left; j <= right; j++ {
            res = append(res, matrix[top][j])
        }
        top++

        // top -> bottom
        for i := top; i <= bottom; i++ {
            res = append(res, matrix[i][right])
        }
        right--


        if top <= bottom {
            // right -> left
            for j := right; j >= left; j-- {
                res = append(res, matrix[bottom][j])
            }
            bottom--
        }

        if left <= right {
            // bottom -> top
            for i := bottom; i >= top; i-- {
                res = append(res, matrix[i][left])
            }
            left++
        }
    }

    return res
}