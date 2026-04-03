/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        const dummy = new ListNode(-1);
        dummy.next = head;

        let curr = dummy;

        while (curr !== null) {
            const last = findKNodes(curr.next, k);
            if (!last) break;
            const nextNode = last.next;

            const [s,e] = reverse(curr.next, last);
            curr.next = s;
            e.next = nextNode;
            curr = e;
        }

        return dummy.next;

        function reverse(sn, en) {
            const du = new ListNode(-1);
            let node = sn;

            while (node !== en) {
                let tmp = node;
                node = node.next;
                tmp.next = du.next;
                du.next = tmp;
            }

            en.next = du.next;
            du.next = en;

            return [en, sn];
        }

        function findKNodes(node, k) {
            while (k - 1 > 0 && node) {
                node = node.next;
                k--;
            }

            // console.log(node.val);
            if (k > 1) return null;
            return node;
        }
    }
}
