/**
 * Created by ratan_000 on 6/24/2016.
 */


var str = "Kroyal King";

// approach 1 - sort and compare first and second element if same then break the loop
// complexity: nlogn + n = nlogn

function checkUnique(str){
    var str=str.split('').sort(); // n logn
    for(var i=1;i< str.length;i++){   // n
        if(str[i-1] == str[i]){
            console.log("string contains duplicate");
            return false;
        }
    }
    console.log("String has all unique characters");
    return true;
}

checkUnique(str);


console.log("--------------second approach----------------");
// approach 2 - to do it in o(n)

function checkUnique2(str){
    var myHashMap = {};
    var str = str.split('');
    for(var i=1;i< str.length;i++){
        if(myHashMap[str[i]]){ // if presents then return count else undefined
            // existing
            console.log("string contains duplicate");
            return false;
        }else{
            // new .. so put into the hashmap
            myHashMap[str[i]]= true;
        }
    }
    console.log("String has all unique characters");
    return true;
}

checkUnique2(str);

// approach 3 : same use charactercodeAt to get the ascii value and go to the array position
// then save






