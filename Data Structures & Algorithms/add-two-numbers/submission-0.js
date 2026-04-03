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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let carry = 0;
        const dummy = new ListNode(-1);
        let node = dummy;

        while (l1 || l2 || carry) {
            let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
            node.next = new ListNode(sum % 10);
            node = node.next;
            carry = ~~(sum/10);
            
            if (l1) l1 = l1.next;
            if (l2) l2 = l2.next;
        }

        return dummy.next;
    }
}
