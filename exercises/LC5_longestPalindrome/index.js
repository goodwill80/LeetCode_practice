//Given a string s, find the longest palindromic substring in s
// --- Example
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("a") --> "a"

function longestPalindrome(s) {
  let maxLength = 1;
  let startIndex = 0;

  // Helper function -
  const expandCenter = (left, right) => {
    while (left >= 0 && right <= s.length && s[left] === s[right]) {
      maxLength = Math.max(maxLength, right - left + 1);
      startIndex = left;
      left--;
      right++;
    }
  };

  // Sliding window
  for (let i = 0; i < s.length; i++) {
    expandCenter(i - 1, i + 1);
    expandCenter(i, i + 1);
  }

  return s.slice(startIndex, startIndex + maxLength);
}

console.log(longestPalindrome('hskhksaracecar'));
module.exports = longestPalindrome;
