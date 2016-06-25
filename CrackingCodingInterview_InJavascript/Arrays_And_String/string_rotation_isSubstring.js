/**
 * Created by ratan_000 on 6/24/2016.
 */
str ="waterBottle";
str2="erBottlewat";
str3="erBottlewaz";

// we have to check if one string is rotagtion of another string

function checkRotation(str,str2){

    // first check the length

    if(str.length !== str2.length){
        console.log("Length not matching.. can't be a rotation");
         return false;
    }

    // now checking if str1 is rotation of str2

    var tempStr1 = str + str;

     if(tempStr1.indexOf(str2) > -1){
         console.log("rotation found..");
         return true;
     }else{
         console.log("rotation not found");
         return false;
     }

    // similarly we can check for str2


}

checkRotation(str,str2); // rotation found..
checkRotation(str,str3); // rotation not found
