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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let cnt = 0;
        let target = -Infinity;

        dfs(root);

        return target;

        
        function dfs(node) {
            if (!node) return;

            dfs(node.left);
            cnt++;
            if (cnt === k) {
                target = node.val;
                return;
            }
            dfs(node.right);
        }
    }
}
