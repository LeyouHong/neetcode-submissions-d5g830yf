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
     * @return {void}
     */
    reorderList(head) {
        let fast = head, slow = head;

        while (fast.next && fast.next.next) {
            fast = fast.next.next;
            slow = slow.next;
        }

        let l1 = head, l2 = reverse(slow.next);
        const dum = new ListNode(-1);
        let tNode = dum;

        while (l1 && l2) {
            let t1 = l1, t2 = l2;
            l1 = l1.next;
            l2 = l2.next;
            t1.next = t2;
            t2.next = null;
            tNode.next = t1;
            tNode = tNode.next.next;
        }

        if (l1) {
            tNode.next = l1;
            l1.next = null;
        }

        return dum.next;

        function reverse(node) {
            const dummy = new ListNode(-1);

            while (node) {
                let tmp = node;
                node = node.next;
                tmp.next = dummy.next;
                dummy.next = tmp;
            }

            return dummy.next;
        }
    }
}
