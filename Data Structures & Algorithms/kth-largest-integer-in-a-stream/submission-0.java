class KthLargest {
    private Queue<Integer> pq;
    private int size;

    public KthLargest(int k, int[] nums) {
        size = k;
        pq = new PriorityQueue<>((a,b) -> a-b);

        for (int num : nums) {
            pq.offer(num);
            if (pq.size() > size) {
                pq.poll();
            }
        }
    }
    
    public int add(int val) {
        pq.offer(val);
        if (pq.size() > size) {
            pq.poll();
        }
        return pq.peek();
    }
}
