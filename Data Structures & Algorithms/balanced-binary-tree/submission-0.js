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
     * @return {boolean}
     */
    isBalanced(root) {
        let res = true;
        dfs(root);

        return res;

        function dfs(node) {
            if (!node) return 0;

            const l = dfs(node.left);
            const r = dfs(node.right);
            if (Math.abs(l-r) > 1) {
                res = false;
            }

            return Math.max(l, r)+1;
        }
    }
}
