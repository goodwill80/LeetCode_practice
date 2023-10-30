// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

function lengthOfLongestSubstring(s) {
  let windowMap = {};
  let windowStart = 0;
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    // This if condition always skipped as windowMap[i] is not yet assigned. Until a repeated character occurs
    // The windowStart pointer will always move when there is a repeat character
    if (windowMap[s[i]] >= windowStart) {
      windowStart = windowMap[s[i]] + 1;
    }
    console.log(windowStart);
    windowMap[s[i]] = i;
    maxLength = Math.max(maxLength, i - windowStart + 1);
  }

  console.log(maxLength);
}

lengthOfLongestSubstring('abcabcbb');

module.exports = lengthOfLongestSubstring;
