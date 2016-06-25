/**
 * Created by ratan_000 on 6/24/2016.
 */

/*
so basicaaly we have to check from the given string can palindrom string can be formed or not
if a string is palindrom then there can be maximum 1 character which is having odd count
and rest of the characters are even.

so store this in obj and check for the count.. if odd count character can be 0 or 1

 */



var str ="MADAM";
var str2 ="MADAMA";

function checkforPermutation(str){

    // we assume the string is palindrom .. no need to check again
   var myHashMap={};
    var oddFlag=false;
    str = str.split('');

    for(var i=0;i< str.length;i++){
        if(myHashMap[str[i]]){ // if presents then return count else undefined
            // existing
            myHashMap[str[i]]=  myHashMap[str[i]]+1;
        }else{
            // new .. so put into the hashmap
            myHashMap[str[i]]= 1; // putting count
        }
    }

    // now we have each character count now iterating map

    for(var i in myHashMap){
        if(myHashMap[i] % 2){
            if(!oddFlag){
                oddFlag=true;
            }else{
                console.log("palindrom permutation failed..");
                return false;
            }
        }
    }

     console.log("yes Palindrom is possible");
    return true;


}


checkforPermutation(str); // yes, Palindrom is possible

checkforPermutation(str2); //palindrom permutation failed..



// second approach can be to sort and check keep counter if odd then make the flag true and
// if another odd character found and the flag us true then return false

console.log("------------------------second approach ------------------------------");
function  checkforPermutation2(str) {
    str = str.split('').sort().join('');
    console.log(str);
    var oddflag = false;
    var curr_count = 1;   // very imporant to set it to 1 as every character will have one count
    for (var i = 1; i < str.length; i++) {
        if (str.charAt(i - 1) == str.charAt(i)) {
            curr_count += 1;
        } else {
            if (curr_count % 2) {
                if (!oddflag) {
                    oddflag = true;
                    count=1; // resetting count
                } else {
                    console.log("second odd length found .. permutation not possible");
                    return false;
                }

            }else {
                // if the count is even
                count=1; // resetting count for even

            }
        }
    }
    console.log("permutation is possible");
  return true;
}

checkforPermutation2(str);
checkforPermutation2(str2);