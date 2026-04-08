class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        const distances = [];
        const root = {};
        let res = 0;

        for (let i = 0; i < points.length; i++) {
            for (let j = i+1; j < points.length; j++) {
                const d = Math.abs(points[i][0] - points[j][0]) + 
                          Math.abs(points[i][1] - points[j][1]);
                distances.push([i,j,d]);
            }
        }

        distances.sort((a,b) => a[2] - b[2]);

        for (let [u,v,d] of distances) {
            const [x,y] = [find(u), find(v)];
            if (x === y) continue;
            root[x] = y;
            res += d;
        }

        return res;

        function find(x) {
            while (root[x] !== undefined) x = root[x];
            return x;
        }
    }
}
