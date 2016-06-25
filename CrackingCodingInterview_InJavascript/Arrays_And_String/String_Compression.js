/**
 * Created by ratan_000 on 6/24/2016.
 */


/* compress the string --
aaabbabbc = a3b2a1b2c1
 */

var str="aaabbabbc";

function compressMe(str){
    var curr_count=1;
    var result ="";

    for(var i=1 ;i < str.length; i++){
        if(str.charAt(i-1) == str.charAt(i)){
            curr_count +=1; // increasing the count

            if(i== str.length-1){ // last character if same as prev
                result +=  str.charAt(i - 1) + curr_count;
            }
            console.log(curr_count);
        }else {
            // prev and current not matching .. write the count in front of previous and reset the count to 1
            result += str.charAt(i - 1) + curr_count;
            console.log(result);
            curr_count = 1;

            if(i== str.length-1){ // last character if other than previous
                result += str.charAt(i) + curr_count;
            }
        }
    }

    console.log(result);
}

compressMe(str);
