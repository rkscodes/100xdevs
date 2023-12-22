/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let strArr = str.split("");
  strArr = strArr.filter((val) => {
    if (val >= 'a' && val <= 'z')
      return true;
    return false;
  })
  return strArr.join('') == strArr.reverse().join('');
}

module.exports = isPalindrome;