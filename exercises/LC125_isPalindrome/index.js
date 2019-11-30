// Pseudocode
// 1. Sanitize input string by removing non alphanumeric characters and lowercasing it
// 2. Create a left and right pointer, initially at start and end of input string
// 3. While left pointer is less than right pointer
//    If characters at left pointer and right pointer are not equal, return false
// 4. Return true

function isPalindrome(s) {
  const sanitizeStr = s.toLowerCase().replace(/[\W_]/g, '');
  let leftPointer = 0;
  let rightPointer = sanitizeStr.length - 1;

  while(leftPointer < rightPointer){
    if(sanitizeStr[leftPointer] !== sanitizeStr[rightPointer]){
      return false;
    }
    leftPointer++;
    rightPointer--;
  }
  return true;
}

module.exports = isPalindrome;
