class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let i = 0, j = s.length-1;
        while (i < s.length && !isMath(s[i])) i++;
        while (j >= 0 && !isMath(s[j])) j--;

        while (i < j) {
            // console.log(s[i].toLowerCase(), s[j].toLowerCase())
            if (s[i].toLowerCase() === s[j].toLowerCase()) {
                i++, j--;
                while (i < s.length && !isMath(s[i])) i++;
                while (j >= 0 && !isMath(s[j])) j--;
            } else {
                return false;
            }    
        }

        return true;

        function isMath(ch) {
            return (ch>= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || (ch >= '0' && ch <= '9');
        }
    }
}
