class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        const wordSet = new Set(wordList);
        if (!wordSet.has(endWord)) return 0;

        let beginSet = new Set([beginWord]);
        let endSet = new Set([endWord]);
        
        wordSet.delete(beginWord);
        wordSet.delete(endWord);

        const chars = 'abcdefghijklmnopqrstuvwxzy';
        let step = 1;

        while (beginSet.size) {
            if (endSet.size < beginSet.size) {
                beginSet, endSet = endSet, beginSet;
            }

            let tmp = new Set();

            for (let word of beginSet) {
                const wordChars = word.split('');

                for (let i = 0; i < word.length; i++) {
                    for (let c of chars) {
                        if (c === wordChars[i]) continue;

                        wordChars[i] = c;
                        const newWord = wordChars.join('');
                        if (endSet.has(newWord)) {
                            return step+1;
                        }

                        if (wordSet.has(newWord)) {
                            tmp.add(newWord);
                            wordSet.delete(newWord);
                        }
                    }
                    wordChars[i] = word[i];
                }
            }

            beginSet = tmp;
            step++;
        }

        return 0;
    }
}
