/**
 * Created by ratan_000 on 6/24/2016.
 */

var str="Ratan";
var str2="taaan";
var str3="atRan";

// appriach 1 : 1. check length 2.sort and compare onr by one bit
// complexity : nlogn

function findPermutation(str,str2){
    // first check for length
    if(str.length !=str2.length){
        console.log("permutation not found");
        return false;
    }
    // sort
   str= str.split('').sort().join('');
    str2= str2.split('').sort().join('');

    for(var i=0;i<str.length;i++){
       if(str.charAt(i) !== str2.charAt(i)){
           console.log(" permutation not found..");
           return false;
       }
    }
    console.log(" permutation found..");
    return true;
}

findPermutation(str,str2); //   permutation not found..
findPermutation(str,str3); //     permutation found..

console.log("----------------approach 2 --------------------------------");
// o(n) // 1. check lenght
// 2. use object to store the each character count then  run next loop
// for each character reduce the count and the
// run third loop : here check if there is some thing other than zero then return false


function findPermutation2(str,str2){
    var myHashMap={};
    // first check for length
    if(str.length !=str2.length){
        console.log("permutation not found");
        return false;
    }

     str= str.split('');
     str2= str2.split('');

    for(var i=0;i< str.length;i++){
        if(myHashMap[str[i]]){ // if presents then return count else undefined
            // existing
            myHashMap[str[i]]=  myHashMap[str[i]]+1;
        }else{
            // new .. so put into the hashmap
            myHashMap[str[i]]= 1; // putting count
        }
    }
    // at  end of above loop we have each character and respectibe count

    // second loop if character found then reduce the count if element not
    // present or count value is other than zero then return false

    for(var i=0;i< str2.length;i++){
        if(myHashMap[str2[i]]){ // if presents then return count else undefined
            // existing
            myHashMap[str2[i]]=  myHashMap[str2[i]]-1; // sunstracting count
        }else{
            console.log("extra character found.. no permutation");
            return false;
        }
    }

    // third loop to check map if any element have value other than zero

    for(var i in myHashMap){
       // console.log(myHashMap[i]);
        if(myHashMap[i] !== 0){
            console.log("hashMap  test fail .. permutation not  found")
            return false;
        }
    }


    console.log(" permutation found..");
    return true;
}

findPermutation2(str,str2); //   extra character found.. no permutation
findPermutation2(str,str3); // permutation found..




