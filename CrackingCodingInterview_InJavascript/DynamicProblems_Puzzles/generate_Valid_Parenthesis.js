/**
 * Created by ratan_000 on 6/27/2016.
 */

var GeneratePrenthesis= function (n) {  // as per n the first final result would be  () * n
  var result=[];

    result.push('()'); // default

    // loop according to number of parenthesis

    while(n > 0){
        // for every n we receive new array from getParenthesis and that is passed as per the n
         console.log("passing new array:" + result);

        result= getParenthesis(result);
        n--;
    }

    console.log("result:");
    console.log(result);



    function getParenthesis(myArr){
        var subResult=[];
        var innerLoopLenght=myArr[0].length;  // every element in array is of same length

        //outer loop on array
           // inner loop on length of any element (same) of that array

        for(var i=0;i<myArr.length;i++){
            var curr_string=myArr[i]; // imp
              for(var j=0; j<innerLoopLenght; j++){
                  var temp =  curr_string.substring(0,j) + '()' + curr_string.substring(j);  // for 0th j it will push () at starting and then breaking
                  // each character and putting the() .. which forms valid parenthesis
                  //  console.log("Temp:" +temp);
                  if(subResult.indexOf(temp) === -1){
                      subResult.push(temp);
                  }

              }
        } // end of for loop
         return subResult; // so this result will be passed again from main loop if n is > 0
    }
};

GeneratePrenthesis(3);


/*

 passing new array:()  // default passing n=1
 passing new array:()(),(()) // after processing n=1 // this is again passed to for n=2
 passing new array:()()(),(())(),()(()),(()()),((()))  // n=3 last pass and result is below
 result:
 [ '()()()()',
 '(())()()',
 '()(())()',
 '()()(())',
 '(()())()',
 '((()))()',
 '(())(())',
 '()(()())',
 '()((()))',
 '(()()())',
 '((())())',
 '(()(()))',
 '((()()))',
 '(((())))' ]


 */
