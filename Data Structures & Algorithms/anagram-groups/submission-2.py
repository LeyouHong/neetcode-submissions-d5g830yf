from collections import Counter

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        memory = {} #ordered anagram: anagrams
        anagrams_grouped = []

        for item in strs:
            sorted_item = ''.join(sorted(item))
            if sorted_item in memory:
                memory[sorted_item].append(item)
                continue
            memory[sorted_item] = [item]

        for anagram in memory:
            anagrams_grouped.append(memory[anagram])

        return anagrams_grouped