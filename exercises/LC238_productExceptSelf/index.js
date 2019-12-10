// Time Complexity: O(n), no nested for loops
// Space Complexity: O(1), output array does not count as extra space for the purpose of space complexity analysis

// Return the products to left & right of number
// Pseudocode
// 1. Create output array equiv in length to input array
//    Map through input array and fill output array with 1's
// 2. Create product var set to 1
// 3. Multiply from the left of each element
//    Start a for loop. 
//      Set output at the index equal to the output at the index multipled by the product value
//      Set product equal to product multiplied by the value at the current index of input array
// 4. Reset prodcut to 1
// 5. Multiply from the right for each element
//    Start a for loop, starting from the last element and decrementing
//      Same two steps from part 3
// 6. Return the output array 

const productExceptSelf = nums => {
  let output = nums.map(n => 1);
  let product = 1;

  // Multiply from the left;
  for (let i = 0; i < nums.length; i++) {
    output[i] = output[i] * product;
    product = product * nums[i];
  }

  product = 1;
  // Multiply from the right
  for (let j = nums.length - 1; j >= 0; j--) {
    output[j] = output[j] * product;
    product = product * nums[j];
  }
  return output;
};

module.exports = productExceptSelf;
