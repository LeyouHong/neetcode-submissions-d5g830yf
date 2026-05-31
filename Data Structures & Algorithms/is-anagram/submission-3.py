from collections import Counter

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return Counter(s) == Counter(t)
        # if len(s) != len(t):
        #     return False
        # map = {}

        # for i in range(len(s)):
        #     map[s[i]] = map.get(s[i], 0) + 1
        
        # for i in range(len(t)):
        #     map[t[i]] = map.get(t[i], 0) - 1
        #     if map[t[i]] < 0:
        #         return False
        
        # return True
        
