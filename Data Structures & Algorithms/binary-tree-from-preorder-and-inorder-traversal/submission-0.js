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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {

        return build(0, preorder.length-1, 0, inorder.length-1);

        function build(ps, pe, is, ie) {
            if (is > ie) return null;

            const root = new TreeNode(preorder[ps]);

            let p = is;
            while (inorder[p] !== preorder[ps]) p++;
            const cnt = p - is;

            root.left = build(ps+1, ps+cnt, is, p-1);
            root.right = build(ps+cnt+1, pe, p+1, ie);

            return root;
        }
    }
}
