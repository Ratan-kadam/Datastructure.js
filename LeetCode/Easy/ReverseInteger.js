/* Reverse digits of an integer.
Example1: x = 123, return 321
Example2: x = -123, return -321
*/

function reverse(num) {

  var str = '';

  if(typeof(num) !== 'number') {
    return 0;
  }

  if(num === 0) {
    return 0;
  }

  var sign = (num > 0) ? 'positive' : 'negative';
  num = Math.abs(num);

  while(num > 0 ) {
    lastDigit = num % 10;
    str =  str + lastDigit;
    num = parseInt(num / 10);
  }

  return sign === 'negative' ? parseInt(str, 10) * -1 :  parseInt(str, 10);
}

console.log(reverse(1234));
console.log(reverse(0));
console.log(reverse(-1));

//4321
//0
//-1
