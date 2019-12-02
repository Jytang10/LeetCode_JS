// Time complexity: O(n)
// Space complexity: O(n)

// Psuedocode
// Count number of possible ways if n is 1-5
// Notice that if for values of n 1-3, number of ways is equal to n
// 1. If n is less than 3, number of ways is equal to n
// 2. Create ways array with number of ways for steps 0-3
// 3. Start a for loop, starting from index 4
//    Use fibonacci sequence, push value into ways array consisting of addition of previous two array values
// 4. Return the value at index n in ways array


const climbStairs = n => {
  if (n <= 3) return n;

  let ways = [0, 1, 2, 3]

  for (let i = 4; i <= n; i++) {
    ways.push(ways[i - 1] + ways[i - 2])
  }

  return ways[n];
};

module.exports = climbStairs;
