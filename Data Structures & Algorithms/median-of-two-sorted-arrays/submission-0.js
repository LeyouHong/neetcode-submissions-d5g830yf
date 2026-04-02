class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(A, B) {
        const m = A.length, n = B.length;

        if (m > n) return this.findMedianSortedArrays(B, A);

        const k = (m + n -1) >> 1;

        let l = 0, r = m;

        while (l < r) {
            const midA = l + ((r-l)>>1);
            const midB = k - midA;
            if (A[midA] < B[midB]) {
                l = midA + 1;
            } else {
                r = midA;
            }
        }

        let a = Math.max(l > 0 ? A[l-1] : -Infinity, k-l >= 0 ? B[k-l] : -Infinity);
        if ((m+n)%2 === 1) return a;

        let b = Math.min(l < m ? A[l] : Infinity, k-l+1 < n ? B[k-l+1] : Infinity);

        return (a+b)/2;
    }
}
