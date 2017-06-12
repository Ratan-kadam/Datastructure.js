/*
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

 if(x > -1 && x < 10 ) {
     return true; // considering only positive numbers
 }

 var revNumber = 0;
 var actualNumber = x;

 while(x > 0) {
     let lastDigit = x % 10;
     revNumber = revNumber * 10 + lastDigit;
     x = Math.floor(x / 10);
 }

 if(revNumber === actualNumber) {
     return true;
 }

 return false;

};
