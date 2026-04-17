func mergeTriplets(triplets [][]int, target []int) bool {
    set1, set2, set3, badSet4 := 
        make(map[int]struct{}), make(map[int]struct{}), make(map[int]struct{}), make(map[int]struct{})
    
    for i, t := range triplets {
        if t[0] > target[0] || t[1] > target[1] || t[2] > target[2] {
            badSet4[i] = struct{}{}
            continue
        }

        if t[0] == target[0] {
            set1[i] = struct{}{}
        }
        if t[1] == target[1] {
            set2[i] = struct{}{}
        }
        if t[2] == target[2] {
            set3[i] = struct{}{}
        }
    }

    return len(set1) > 0 && len(set2) > 0 && len(set3) > 0
}

/*
 0
 2
 2

b 1
*/