// Time Complexity: O(n) - code loops over input array once
// Space Complexity: O(n) - maxLootAtNth array size depends on length of input array

// Psuedocode
// 1. Conditional if there are 0 houses
// 2. Conditional if there is only 1 house. The first house
// 3. Conditional if there are 2 houses. Max between the first and second house
// 4. Create maxLootAtNth array to hold each loot value at nth houses
// 5. Loop through the input array, starting at the second index
//    Find the greater value, either the current input array value plus the value in maxLootAtNth two values prior, or the previous value in maxLootAtNth array
//    Push the value to the maxLootAtNth array
// 6. Return the last value of the maxLootAtNth array

function rob(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  let maxLootAtNth = [nums[0], Math.max(nums[0], nums[1])];

  for (let i = 2; i < nums.length; i++) {
    maxLootAtNth.push(Math.max(nums[i] + maxLootAtNth[i - 2], maxLootAtNth[i - 1]));
  }

  return maxLootAtNth.pop();
}

  
module.exports = rob;
