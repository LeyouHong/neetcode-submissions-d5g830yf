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
     * @return {ListNode}
     */
    reverseList(head) {
        const dummy = new ListNode(-1);

        while (head) {
            let tmp = head;
            head = head.next
            tmp.next = dummy.next;
            dummy.next = tmp;
        }

        return dummy.next;
    }
}
