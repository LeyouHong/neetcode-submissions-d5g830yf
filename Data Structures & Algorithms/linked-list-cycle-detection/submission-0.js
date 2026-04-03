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
     * @return {boolean}
     */
    hasCycle(head) {
        let fast = head, slow = head;

        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;

            if (fast === slow) return true;
        }

        return false;
    }
}

/**
 *   1 -> 2 -> 3
 *        ^    |
 *        |    v
 *        5 <- 4 
 * 
 *  2a+2b = a+b+c+b
 * a = c
 */