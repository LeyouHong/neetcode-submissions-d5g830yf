function DoubleListNode(key, val) {
    this.key = key;
    this.val = val;
    this.next = this.prev = null;
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.head = new DoubleListNode(0, 0);
        this.tail = new DoubleListNode(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.map = new Map();
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.map.get(key)) return -1;
        const node = this.map.get(key);
        this.deleteNode(node);
        this.insertNode(node);
        return node.val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.map.has(key)) {
            const node = this.map.get(key);
            this.deleteNode(node);
        }

        let newNode = new DoubleListNode(key, value);
        this.insertNode(newNode);
        this.map.set(key, newNode);

        if (this.map.size > this.capacity) {
            const node = this.tail.prev;
            this.deleteNode(node);
            this.map.delete(node.key);
        }
    }

    insertNode(node) {
        if (!node) return;
        node.next = this.head.next;
        this.head.next.prev = node;
        this.head.next = node;
        node.prev = this.head;
    }

    deleteNode(node) {
        if (!node) return;
        node.next.prev = node.prev;
        node.prev.next = node.next;
    }

    /**
     *    <- 1 ->
     *          
     */
}
