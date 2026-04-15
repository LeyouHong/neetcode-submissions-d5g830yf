type DetectSquares struct {
    Map map[int]map[int]int
}


func Constructor() DetectSquares {
    return DetectSquares {
        Map: make(map[int]map[int]int),
    }
}


func (this *DetectSquares) Add(point []int)  {
    if _, ok := this.Map[point[0]]; !ok {
        this.Map[point[0]] = make(map[int]int)
    }
    this.Map[point[0]][point[1]]++
}


func (this *DetectSquares) Count(point []int) int {
    ans, x1, y1 := 0, point[0], point[1]
    for y2, _ := range this.Map[x1] {
        if y2 == y1 {
            continue
        }
        dist := abs(y1, y2)
        ans += this.Map[x1][y2] * (this.Map[x1 - dist][y2] * this.Map[x1 - dist][y1] + 
            this.Map[x1 + dist][y2] * this.Map[x1 + dist][y1])
    }

    return ans
}

func abs (a, b int) int {
    c := a - b
    if c < 0 {
        return -c
    }
    return c
}


/**
 * Your DetectSquares object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Add(point);
 * param_2 := obj.Count(point);
 */