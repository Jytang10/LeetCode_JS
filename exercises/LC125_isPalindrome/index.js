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
