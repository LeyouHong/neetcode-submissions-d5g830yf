/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */

class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        Queue<ListNode> pq = new PriorityQueue<>((a,b) -> a.val-b.val);

        for (ListNode l : lists) {
            if (l != null)
                pq.offer(l);
        }

        ListNode dummy = new ListNode(-1);
        ListNode node = dummy;

        while (!pq.isEmpty()) {
            ListNode l = pq.poll();
            node.next = l;
            node = node.next;
            l = l.next;
            if (l != null) {
                pq.offer(l);
            }
        }

        return dummy.next;
    }
}
