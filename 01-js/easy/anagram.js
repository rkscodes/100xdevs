/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()
  let map = {}
  for (const c of str1) {
    map[c] = map[c] ?? 0;
    map[c]++;
  }

  for (const c of str2) {
    if ((map[c] ?? 0) == 0) {
      return false;
    } else
      map[c]--;
  }

  for (const key in map) {
    if (map[key] != 0)
      return false
  }
  return true
}
module.exports = isAnagram;
