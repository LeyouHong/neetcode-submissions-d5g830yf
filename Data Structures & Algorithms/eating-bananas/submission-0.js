class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 0, r = Math.max(...piles);
        
        while (l < r) {
            const m = l + ((r-l)>>1);
            let cost = 0;
            for (let p of piles) {
                cost += Math.ceil(p / m);
            }

            if (cost > h) {
                l = m+1;
            } else {
                r = m;
            }
        }

        return l
    }
}
