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
    isValidBST(root) {
        let prev = -Infinity;
        let res = true;

        dfs(root);

        return res;

        function dfs(node) {
            if (!node) return;

            dfs(node.left);
            if (node.val <= prev) {
                res = false;
            }
            prev = node.val;
            dfs(node.right);
        }
    }
}
