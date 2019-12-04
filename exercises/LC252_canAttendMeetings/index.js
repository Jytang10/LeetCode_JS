// Given an array of meeting time intervals consisting of start and end
// times [s1, e1], [s2, e2], ... , determine if a person could attend all meetings.
// ---------------------------
// canAttendMeetings([[0, 30], [5, 10], [15, 20]]) --> false
// canAttendMeetings([[7, 10], [2, 4]]) --> true

// Time Complexity: O(N log N). Sorting algorithm used
// Space Complexity: O(N)

// Pseudocode
// 1. Put start and end times in two separate arrays
// 2. Loop through starts array
//    If start time one index ahead is less than end time at current index, return false
// 3. Return true if no time intersection

const canAttendMeetings = intervals => {
  const starts = [];
  const ends = [];

  for (let i = 0; i < intervals.length; i++) {
    const subArray = intervals[i]
    starts.push(subArray[0]);
    ends.push(subArray[1])
  }

  starts.sort((a,b) => a - b);
  ends.sort((a,b) => a - b);

  for (let i = 0; i < starts.length; i++) {
    if (starts[i + 1] < ends[i]) {
      return false
    }
  }

  return true;

};

module.exports = canAttendMeetings;
