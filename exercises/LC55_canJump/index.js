// Time Complexity: O(n^2), due to nested for loops
// Space Complexity: O(n), dpPositions array is the same size as input array

// Pseudocode
// If possible to reach I step AND I step can jump to J step, set J step's DP value to true
// 1. Create a new array dpPositions, with length of nums and fill it with false
// 2. Set first index/value of the array as true
// 3. Start a loop, declaring the j pointer at the second value / index 1
//      Start a nested loop, declaring the i pointer at the first value / index 0, i should be less than j
//        If possible to reach the i-th step (value at dpPositions is true) AND the step + the number of jumps is greater than or equal to j
//          Set value of dpPositions at j equal to true, then break
// 4. Return the last value of dpPositions array, representing whether last step can be reached or not
function canJump(nums) {
  let dpPositions = new Array(nums.length).fill(false);
  dpPositions[0] = true;

  for (let j = 1; j < nums.length; j++) {
    for ( let i = 0; i < j; i++) {
      if (dpPositions[i] && i + nums[i] >= j) {
        dpPositions[j] = true;
        break;
      }
    }
  }

  return dpPositions[dpPositions.length - 1];
}

module.exports = canJump;
