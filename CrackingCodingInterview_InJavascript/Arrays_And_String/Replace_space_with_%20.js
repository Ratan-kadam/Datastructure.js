/**
 * Created by ratan_000 on 6/24/2016.
 */

/* Question :
 Write a method to replace all spaces in a string with '%20'.
 You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string.

 */

// approach 1: start from first character & when space found then copy the next character of string
// +2 character ahed .. But this approach every time space found then all remaing character
// has to be shifted.

// approach 2: start from last character so whenever space encounters get the %20 and continue
// no need to keep moving

var str = "Mr John Smith";


str2 = str.split('');
str2[str2.length+3]=' '; // putting extra space so toal we have 6 spaces
// console.log(str);
var j= str2.length-1;// pointing to character last space

for(var i=str.length-1; i > 0 ; i--){
    if(str2[i] != ' '){ // if the character is non zero copy directly
        str2[j]=str2[i];
        j--;
    }else{
        // find space then put %20 one by one
        str2[j]='%';
        j--;
        str2[j]='2';
        j--;
        str2[j]='0';
        j--;
    }


}

console.log("final:");
console.log(str2);
