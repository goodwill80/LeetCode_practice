function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sCharMap = {};

  for (let i = 0; i < s.length; i++) {
    sCharMap[s[i]] = (sCharMap[s[i]] || 0) + 1;
  }

  for (let i = 0; i < t.length; t++) {
    if (!sCharMap[t[i]]) {
      return false;
    }
    sCharMap[t[i]]--;
  }

  return true;
}

console.log(isAnagram('abcd', 'abdcs'));
module.exports = isAnagram;
