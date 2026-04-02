class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const N = position.length;
        const carPs = position.map((p,i) => [p, speed[i]]);
        carPs.sort((c1, c2) => c2[0] - c1[0]);
        // console.log(carPs);
        let res = 0, max = 0;

        for (let i = 0; i < N; i++) {
            const time = (target - carPs[i][0])/carPs[i][1];
            if (time > max) {
                res++;
                max = time;
            }
        }

        return res;
    }
}
