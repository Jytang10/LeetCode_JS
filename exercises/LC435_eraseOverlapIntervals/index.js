// Time Complexity: O(n log n), solution uses a sorting algorithm
// Space Complexity: O(1), input array is sorted in place
// Pseudocode
// 1. If conditional for exception case of 0 intervals
// 2. Create count variable, set to 0
// 2. Sort original input array by starting values
// 3. Start for loop that iterates at second element
//    Check if current element intersects with previous interval (If starting value of current is less than end value of previous)
//      If it does, increment count by 1. Then remove interval with higest end (set end equal to whichever is smaller, current interval end or previous end)
//      If it does not intersect, set end equal to current interval end
// 3. Return count

const eraseOverlapIntervals = intervals => {
  if (intervals.length === 0) return 0;

  let count = 0;

  intervals.sort((a,b) => a[0] - b[0]);

  let end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i]
    const intervalStart = interval[0]
    const intervalEnd = interval[1]

    if (intervalStart < end) {
      count++;
      end = Math.min(intervalEnd, end)
    } else {
      end = intervalEnd;
    }
  }

  return count;
};

module.exports = eraseOverlapIntervals;
