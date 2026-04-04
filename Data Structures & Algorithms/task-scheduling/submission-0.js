class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const cnt = {};
        for (let t of tasks) {
            cnt[t] = (cnt[t] ?? 0) + 1;
        }

        const keys = Object.keys(cnt).sort((k1,k2) => cnt[k2] - cnt[k1]);
        let p = 1;

        while (cnt[keys[p]] === cnt[keys[p-1]]) p++;

        return Math.max((n+1) * (cnt[keys[0]]-1) + p, tasks.length);
    }
}
