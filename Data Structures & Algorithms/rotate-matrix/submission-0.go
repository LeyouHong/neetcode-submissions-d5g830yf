func rotate(matrix [][]int)  {
    n := len(matrix)

    for j := 0; j < n; j++ {
        l, r := 0, n-1

        for l < r {
            matrix[l][j], matrix[r][j] = matrix[r][j], matrix[l][j]
            l++
            r--
        }
    }

    for i:=0; i < n; i++ {
        for j:=0; j < i; j++ {
            if i == j {
                continue
            }
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
        }
    }
}

/*
  1 2 3
  4 5 6
  7 8 9

 7 8 9
 4 5 6 
 1 2 3
*/