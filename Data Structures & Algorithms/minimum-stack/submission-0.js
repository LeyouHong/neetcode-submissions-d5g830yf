class MinStack {
    values = [];
    minVals = [];

    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.values.push(val);
        if (!this.minVals.length || 
            val <= this.minVals[this.minVals.length-1]) {
                this.minVals.push(val);
            }
    }

    /**
     * @return {void}
     */
    pop() {
        let v = this.values.pop();
        if (v === this.minVals[this.minVals.length-1]) {
            this.minVals.pop();
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.values[this.values.length-1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minVals[this.minVals.length-1];
    }
}
