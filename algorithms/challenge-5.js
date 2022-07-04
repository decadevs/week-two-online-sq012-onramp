function isPalindrome(line) {
  let str = line.toString();

  let arr1 = [];
  let arr2 = [];

  for (let i = 0; i < str.length; i++) {
    arr1.push(str[i]);
  }

  for (let i = str.length - 1; i >= 0; i--) {
    arr2.push(str[i]);
  }

  let returnValue = true;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
        returnValue = false;
        break;
    }
  }

  return returnValue;
}
module.exports = isPalindrome