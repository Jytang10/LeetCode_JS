//Given a string s, find the longest palindromic substring in s
// --- Example
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("a") --> "a"

//*Pseudocode
// 1. Define start index
// 2. Define max length
// 3. Createa helper function, expandAroundMiddle, with left and right input params
//    While the left is greater than or equal to 0, right is less than the length of the string, and left index of string is equal to right index of string
//      Define current palindrome length as right minus left plus 1 (account for arrays 0 index)
//      If the current palindrome length is greater than the max length
//        Set the current palindrome length as the new max length
//        Set the start index as left
//    Decrement left by 1
//    Increment right by 1
// 4. Loop through each character in the string
//    Run helper function for odd-character strings (inputs assuming that the center is a character and left and right are adjacent characters)
//    Run helper function for even-character strings (inputs assuming that the center is the space between character, and left and right are the index and index + 1)
// 5. Return the sliced portion of the string between the start index and the sum of the start index and the max length

function longestPalindrome(s) {
  let startIndex = 0;
  let maxLength = 1;

  function expandAroundMiddle(left, right){
    while(left >= 0 && right < s.length && s[left] === s[right]){
      const currentPalLength = right - left + 1;
      if(currentPalLength > maxLength){
        maxLength = currentPalLength;
        startIndex = left;
      }
      left -= 1;
      right += 1;
    }
  }

  for(let i = 0; i < s.length; i++){
    expandAroundMiddle(i - 1, i + 1);
    expandAroundMiddle(i, i + 1);
  }

  return s.slice(startIndex, startIndex + maxLength);
}

module.exports = longestPalindrome;
