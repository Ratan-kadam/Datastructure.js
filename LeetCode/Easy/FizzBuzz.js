/*
* @param {number} n
* @return {string[]}
*/
var fizzBuzz = function(n) {
   var count = 1;
   const result = [];

   while(count <= n) {
       if(count%3 === 0 && count%5 === 0) {
           result.push('FizzBuzz');
       }else if( count%3 === 0) {
           result.push('Fizz');
       }else if(count%5 === 0) {
           result.push('Buzz');
       }else {
           result.push(count.toString())
       }

       count++;
   }

   return result;
};
