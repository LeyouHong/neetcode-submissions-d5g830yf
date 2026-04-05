class PrefixTree {
    constructor() {
        this.tree = {};
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let cur = this.tree;

        for (let c of word) {
            cur[c] = cur[c] || {};
            cur = cur[c];
        }

        cur.isWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let cur = this.tree;

        for (let c of word) {
            if (cur[c] === undefined) return false;
            cur = cur[c];
        }

        return !!cur.isWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let cur = this.tree;

        for (let c of prefix) {
            if (cur[c] === undefined) return false;
            cur = cur[c];
        }

        return cur !== undefined;
    }
}
