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
     * @return {number[]}
     */
    rightSideView(root) {
        if (!root) return [];
        const res = [];
        const q = [root];

        while (q.length) {
            const len = q.length;
            const tmp = [];

            for (let i = 0; i < len; i++) {
                const node = q.shift();
                tmp.push(node.val);

                if (node.left) q.push(node.left);
                if (node.right) q.push(node.right);
            }

            res.push(tmp[tmp.length-1]);
        }

        return res;
    }
}
