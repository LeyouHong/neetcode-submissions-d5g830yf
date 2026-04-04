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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        const res = [];

        dfs(root);

        return res.join(',');

        function dfs(node) {
            if (!node) {
                res.push('#');
                return;
            }

            res.push(node.val);
            dfs(node.left);
            dfs(node.right);
        }
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const dataArr = data.split(',');
        let i = 0;

        return dfs();

        function dfs() {
            const ch = dataArr[i++];
            if (ch === '#') return null;

            const node = new TreeNode(ch);
            node.left = dfs();
            node.right = dfs();

            return node;
        }
    }
}
