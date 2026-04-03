// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (!head) return null;
        let node = head;
        const cache = new Map();

        while (node) {
            cache.set(node, new Node(node.val));
            node = node.next;
        }

        for (let n of cache.keys()) {
            cache.get(n).next = n.next ? cache.get(n.next) : null;
            cache.get(n).random = n.random ? cache.get(n.random) : null;
        }

        return cache.get(head);
    }
}
