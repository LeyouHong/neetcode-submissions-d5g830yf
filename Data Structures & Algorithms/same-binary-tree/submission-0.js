/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if (!p && !q) return true;
        if (!q || !p) return false;
        if (p.val !== q.val) return false;

        const l = this.isSameTree(q.left, p.left);
        const r = this.isSameTree(q.right, p.right);

        if (!l || !r) return false;

        return true;
     }
}
