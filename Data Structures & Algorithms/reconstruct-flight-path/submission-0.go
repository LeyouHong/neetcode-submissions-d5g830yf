func findItinerary(tickets [][]string) []string {
    flights := make(map[string][]string)
    res := []string{}

    for _, ticket := range tickets {
        from, to := ticket[0], ticket[1]

        if _,ok := flights[from]; !ok {
            flights[from] = []string{}
        }
        flights[from] = append(flights[from], to)
    }

    for _, v := range flights {
        sort.Strings(v)
    }

    dfs(flights, "JFK", &res)

    reverse(res)

    return res
}

func dfs(flights map[string][]string, curr string, res *[]string) {
    for len(flights[curr]) > 0 {
        next := flights[curr][0]
        flights[curr] = flights[curr][1:]
        dfs(flights, next, res)
    }
    *res = append(*res, curr) 
}

func reverse(strs []string) {
    i, j := 0, len(strs)-1

    for i < j {
        strs[i], strs[j] = strs[j], strs[i]
        i++
        j--
    }
}

/*
    {
        jfk: []
        sfo: []
        atl: []
    }

    jfk -> sfo -> atl -> jfk -> atl -> sfo
*/