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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        let res = false;
        dfs(root);

        return res;

        function isSame(r1, r2) {
            if (!r1 && !r2) return true;
            if (!r1 || !r2) return false;
            if (r1.val !== r2.val) return false;
            
            const l = isSame(r1.left, r2.left);
            const r = isSame(r1.right, r2.right);

            return l && r;
        }

        function dfs(node) {
            if (isSame(node, subRoot)) {
                res = true;
                return;
            }

            if (!node) return;

            dfs(node.left);
            dfs(node.right);
        }
    }
}
