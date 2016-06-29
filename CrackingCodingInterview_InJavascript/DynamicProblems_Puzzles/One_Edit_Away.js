/**
 * Created by ratan_000 on 6/29/2016.
 */

/**
 Given two strings S and T, determine if they are both one edit distance apart
 */
/**


 /* approach 1: first compare the length if more than 2 difference then return false
 // then start comparing element one by one .. the moment we find the difference  check the length
 // the take the smallest one(entire)  and compare with the big string with current_1 position.

*/

function CheckOneEditAway(str1,str2){
     // lenght check

     if(str1.length - str2.length >=2){
         return false; // maximum one length difference  allowed
     }

    // comparing the length one by one

    for(var i=0; i<Math.min(str1.length,str2.length); i++){  // compare till the smallest length
        if(str1.charAt(i) !== str2.charAt(i)){
            // mismatch found
            switch (str1.length - str2.length){
                case 0 : // if both string are same
                    if(str1.substring(i+1) == str2.substring(i+1)){ // comparing the entire remaining string
                        return true;
                    }else{
                        return false;
                    }
                    break;
                case 1: // str1 is big than str2 (as max difference is 1)
                    if(str1.substring(i+1) < str2.substring(i)){   // str1 start with i+1 as it length is more than str2
                        return true;
                    }else{
                        return false;
                    }
                    break;
                case 2:// str2 is big

                    if(str1.substring(i) < str2.substring(i+1)){   // str1 start with i+1 as it length is more than str2
                        return true;
                    }else{
                        return false;
                    }
                    break;
            }

        }
    }
}

console.log(CheckOneEditAway("ratan","ratak"));
console.log(CheckOneEditAway("ratan","ragan"));
console.log(CheckOneEditAway("xxx","xyyy8"));
