/**
 * Created by ratan_000 on 6/24/2016.
 */

// design sum(1)(2) : first function should get the 1 and that returns the function and (2) becomes input for second fucntion

function sum(first){
     return function (second){
          return first + second;
     }
}

console.log(sum(1)(9)); // 10

/**
 * for sum(1)(9) (10)(11) multiple accepting paramretre
*/


 function sum2(first) {
    var sum = first;
    function internalFunction(next){
        sum = sum + next;
        return internalFunction;  // so this will always return function which will ready to accept next parametre

    }

    internalFunction.toString=function(){
      //  console(".tostring  act as final method ");
        console.log(sum);
         return sum;
    };

    return internalFunction;
}

 console.log(sum2(10)(20)(50)); // you can see this pasting in browser console.

