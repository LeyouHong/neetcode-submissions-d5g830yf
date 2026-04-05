class WordDictionary {
    constructor() {
        this.root = {}
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let cur = this.root;

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

        return searchNext(this.root, 0);

        function searchNext(cur, depth) {
            if (!cur || (depth === word.length && !cur.isWord)) {
                return false;
            }
            if (depth === word.length && cur.isWord) {
                return true;
            }

            if (word[depth] === '.') {
                for (let i = 0; i < 26; i++) {
                    const c = String.fromCharCode(97+i);
                    if (searchNext(cur[c], depth+1)) {
                        return true;
                    }
                }
                return false;
            }

            return searchNext(cur[word[depth]], depth+1)
        }
    }
}
