// Time Complexity: O(N), go through every element in input array once
// Space Complexity: O(N), # keys in hash table is equal to # unique values in input array

// Pseudocode
// 1. Create object / hash table to hold array values
// 2. Loop through all values in array
//    Optionally set a variable equal to input[array] for readability
//    If the value is found and already in the object
//      Return true
//    Else, add the value to the object
// 3. Return false (if the loop runs successfully without returning true)

const containsDuplicate = nums => {
  const visitedNums = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    
    if (visitedNums[num]) {
      return true
    } else {
      visitedNums[num] = true;
    }
  }

  return false;
};

module.exports = containsDuplicate;
