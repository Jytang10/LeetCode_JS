// Time Complexity:  O(N), if N is defined as number of cells in matrix
// Space Complexity: O(1), only modify input matrix

// Psuedocode
// 1. Create count variable for island count, set to 0
// 2. Iterate through every cell in the matrix
//    First loop through each row
//      Nested loop; loop through each col in the row
//        If the cell is an island (equal to 1)
//          Increment count by 1. 
//          Then call dfs helper function in order to sink the island and convert the 1 to 0 (don't want the code to count any of the adjacent 1's as separate islands)
// 3, Create a helper function dfs
//    If the row is less than 0, greater than grid.length, col is less than 0, col is greater than or equal to grid[0].length, or if grid[row][col] is 0
//      Return
//    Set the cell to water (0)
//    Call dfs on cells above, below, left and right (dfs runs 4 times on row and col -1 +1)
// 4. Return count

function numIslands(grid) {
  let count = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if(grid[row][col] === "1") {
        count++;
        dfs(grid, row, col)
      }
    }
  }

  function dfs(grid, row, col) {
    if (
      row < 0 ||
      row >= grid.length ||
      col < 0 ||
      col >= grid[0].length ||
      grid[row][col] === "0"
    ) {
      return;
    }
    grid[row][col] = "0";
    dfs(grid, row -1, col)
    dfs(grid, row + 1, col)
    dfs(grid, row, col -1)
    dfs(grid, row, col + 1)
  }

  return count;
}

module.exports = numIslands;
