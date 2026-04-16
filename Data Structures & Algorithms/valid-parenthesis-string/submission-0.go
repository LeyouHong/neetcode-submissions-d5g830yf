// l = 最少可能的未匹配 '('
// r = 最多可能的未匹配 '('

func checkValidString(s string) bool {
    l, r := 0, 0

    for _, c := range s {
        if c == '(' {
            l++
            r++
        } 

        if c == ')' {
            l--
            r--
        }

        if c == '*' {
            l--
            r++
        }

        if r < 0 {
            return false
        }

        if l < 0 {
            l = 0
        }
    }

    return l == 0
}