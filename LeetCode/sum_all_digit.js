/**
 * Created by ratan_000 on 7/5/2016.
 */
/**
 Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
 For example:
 Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.
 Follow up:
 Could you do it without any loop/recursion in O(1) runtime?
 **/

// approach 1 : iterative : mod 10 get the last num then divide by 10

// approach2 : recursive way
function calDigitSum(num){

    if(num < 1){
        return 0;
    }
    return calDigitSum(Math.floor(num/10))+ num%10; // from every stack get the last element and pass the divide to next operation

}


console.log(calDigitSum(1234));

/* f(123) + 4
   f(12)+3
   f(1) +2
   f(0) + 1
   return 0
          f(0) +1  = 0 + 1 = 1
          f(1) +2  = 1 + 2 = 3
          f(12)+3 = 3 + 3 = 6
          f(123) + 4 = 6 +4  =10

   */