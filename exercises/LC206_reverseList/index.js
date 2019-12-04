// Time Complexity: O(N). Traversed through Linked List once
// Space Complexity: O(1)

// Psuedocode
// 1. Create prev variable, initially set to null
// 2. Create current variable, initially set to the head
// 3. Run a while loop
//    While current is not null
//      Create a temp variable, set to current.next
//      Change the direction by setting current.next equal to prev
//      Move prev and current up by 1. Set prev equal to current, set current equal to temp
// 4. Return the final resulting head, prev

const reverseList = head => {
  let prev = null;
  let current = head;

  while (current !== null) {
    let temp = current.next

    // Change direction
    current.next = prev;

    // Move prev and current up by 1
    prev = current;
    current = temp;
  }

  return prev;
};

module.exports = reverseList;
