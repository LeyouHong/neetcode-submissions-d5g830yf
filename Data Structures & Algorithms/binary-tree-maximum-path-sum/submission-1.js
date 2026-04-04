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
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) {
        let res = -Infinity;

        dfs(root);

        return res;

        function dfs(node) {
            if (!node) return 0;

            const l = dfs(node.left);
            const r = dfs(node.right);

            const sum = node.val + Math.max(l, 0) + Math.max(r, 0);
            res = Math.max(res, sum);

            return Math.max(l, r, 0) + node.val;
        }
    }
}
