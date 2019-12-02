// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

// Brute force method uses 3 for loops, which gives O(n^2) time complexity which is not enough for interviews

//Pseudocode for O(n) time complexity Sliding Window approach
// 1. Create an empty hashMap called windowCharMap (key/val -> character/index)
// 2. Create windowStart and maxLength variables, set both with initial values of zero
// 3. Loop through input string
//    If current character (endChar) in hashMap has index >= start
//        Set start to index for character found in hashMap + 1
//    Set key/value pair on hashMap to be current character/current Index
//    If length of current window is greater than max
//        Set max to length of current window
// 4. Return max

function lengthOfLongestSubstring(s) {
  let windowCharsMap = {};
  let windowStart = 0;
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {

    const endChar = s[i];

    if (windowCharsMap[endChar] >= windowStart) {
      windowStart = windowCharsMap[endChar] + 1;
    }

    windowCharsMap[endChar] = i;
    maxLength = Math.max(maxLength, i - windowStart + 1);

  }

  return maxLength;
}

module.exports = lengthOfLongestSubstring;
