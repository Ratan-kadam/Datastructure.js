/**
 * Created by ratan_000 on 3/8/2016.
 */
// js bin this is sample commits // strings.

var str = "ratan";
//***************** to find the if the string contain any duplicate characters or not*******************
function findDup(str){

    if(str.length > 256) {
        console.log("The string contain the duplicate.");
        return false;

    }

    var hashMap = {};
    var charArr= str.split('');

    for(var i=0;i<charArr.length-1;i++){
        if (hashMap.hasOwnProperty(charArr[i])){
            console.log("Found Duplicate..");
            hashMap[charArr[i]]=  hashMap[charArr[i]] + 1;
            //return false;
        }else{
            hashMap[charArr[i]]=1;
            console.log("adding " + charArr[i]);
        }
    }

    for(ele in hashMap){
        console.log(ele + ":" + hashMap[ele]);
    }
    console.log(charArr.sort());
}

//findDup('ratan');
/*************************Anagram / Permutaition ****************************************************/
// to find the if the first string is permutation of another string.--- Anagram logic ------

//1. if one string is permutation of another string then - the length of both the string must be same.

function isPermute(str1,str2){
    console.log("we have received two strings.: "+ str1 + " " + str2);

    if(str1.length != str2.length){
        console.log("the string length is odd so they are not in permutation..");
        return false;
    }

    str1= str1.toLocaleLowerCase();
    str2= str2.toLocaleLowerCase();


    charArr = str1.split('');
    charArr2= str2.split('');

    charArr.sort();
    charArr2.sort();

    // console.log(charArr +" "+ charArr2);
    for(var i=0;i<charArr.length;i++){
        if (charArr[i] != charArr2[i]){
            console.log("not a permutation ..");
            return false;
        }

    }

    console.log("the given strings are permutation of each other");

}
//----------------------replacing the characters by %20 in limited string---------------------------
function replaceMe(charArr) {
    console.log("We have received : chatArr " + charArr);

    console.log(charArr.length);

    var n = charArr.length - 1;
    var m = charArr.length - 1;

    while(charArr[n] == ' '){
        n--;
    }
    // at this point m is pointing to end char and n is pointing to the last non space character.
    while(n >= 0){
        if(charArr[n] !== ' '){
          charArr[m]  = charArr[n];
            m--;
            n--;
        }else{
            charArr[m] = '%';
            m--;
            charArr[m]= '2';
            m--;
            charArr[m] ='0';
            m--;
            n--;
        }

    }
    console.log("******"+ charArr);



}
//---------------- Palindrom Permutation ----------------
/* palindrom permutation so main logic will be to check if the string has every letter 2(even) times if the length is even.
//for odd len - every string is even count and 1 is having odd count.
 */

function PalindromPermutation(str) {
    console.log("we have received :" + str);
    var charArr = str.split('');
    var hashMap= {};
    for(var i=0; i<charArr.length ; i++){
        if(hashMap.hasOwnProperty(charArr[i])){
            hashMap[charArr[i]] = hashMap[charArr[i]] + 1;
        }else{
            hashMap[charArr[i]] = 1;
        }
    }

    var count=0;
    for(var ele in hashMap) {
         if(hashMap[ele] % 2 == 1){
             ++count;
         }
     //   console.log("->" + );
    }

    if(charArr.length % 2){
        // odd length
        if(count % 2){
            console.log("2.Palindrom permutation found..");
        }else{
            console.log("2.Not a palindrom permutation..");
        }


    }else {
        //even length
        if(count % 2){
            console.log("Not a palindrom permutation..");
        }else{
            console.log("Palindrom permutation found..");
        }

    }
}

//-----------------------------2 string only one operation allowed--------------------------------------------------------------------
function checkEqual(str1,str2){

    var len1 = str1.length,
        len2 = str2.length;

    var diff = len1 - len2;

    switch (diff) {
        case 0:
            console.log("both are length");
            compare1(str1,str2);
            break;
        case 1:
            console.log("len1 is greater");
            compare2(str1,str2);
            break;
        case -1:
            console.log("len2 is greater");
            compare2(str2,str1);
            break;
    }

}
function compare1(str1,str2){
    var count=0;
    for(var i=0;i<str1.length;i++) {
         if(str1.charAt(i) != str2.charAt(i)){
             count++;
             if(count == 2){
                 console.log("2places found odd .. not match"+ " " + str1+ " " + str2);
                 return false;
             }
         }
    }
    console.log(str1 + " " + str2 + " satisfy the criteria");
}

function compare2(bigStr,smallStr) {
var i= 0,j= 0,match=0;

while(smallStr.charAt(i) != bigStr.charAt(j)){
    j++;
}
  // i is pointing to smallStr starting point and j is pointing to bigstr matching char .

    while(i < smallStr.length && j< bigStr.length){
        if(smallStr[i] == bigStr[j]){
            match++;
        }
        i++;
        j++;
    }

    if(match > 3 ){
        console.log(smallStr +" " + bigStr + "does not follow the rules..");
        return false;
    }
};

//--------------------------------------------------------------------------------------------------
function compressMe(str){

    var len = str.length;
    var newstr ="";
    var count=1;
    for(var i= 0 ; i <= len-2 ; i++){
        if(str.charAt(i) == str.charAt(i+1) ){
            count++;
        }else{
            add(i);

        }
    }
    function add(){

        if(count > 1 ) {
            newstr = newstr + str.charAt(i) + count;
        }else{
            newstr = newstr + str.charAt(i);
        }
        count=1;
    }
    add();
    console.log(newstr);
}
///-----------Matrix Row column zeros -----
// first track the zeros get the location then in second run make thr rows and column to zeros. other wise first making the the rows and column
//zero will create confusion while find previous zeros. and entore matrix will be turn into zeros.

function RowColumnZeros(matrix) {
    var hashMap = {};
    for (var i = 0; i < matrix.length; i++) {
        for(var j=0;j<matrix[i].length;j++){
            if(matrix[i][j] == 0){
                //save the cordinates key as row and column as value
                hashMap[i]= j;
            }

        }
    }

    // now we have all the cordinates in the HashMap so first making the rows zero then column.

    for(var row in hashMap){
        console.log("row:" + row);
           for(var z=0;z < matrix[row].length ; z++){
               matrix[row][z]=0; // row zero
           }

        var column=hashMap[row];

         for(var u=0;u<matrix.length;u++){ // have to iterate thu each row to find that particular column bit
             matrix[u][column]=0; // making column i.e. present in each row a specific colun bit
         }

        }

}
//---------------------------------------------------------------------------------------------------
///////////////---------MAin run ---------------///////////////////////////
//isPermute("rAtan1","nataR2");
//findDup('ratan');
//replaceMe(['R',' ','t',' ','n',' ',' ',' ',' ']);
//checkEqual('ratan','rtman');
//compressMe('raaaatttttyyyy');;
var matrix2 = [[1,2,3,4,5,6] , [7,8,9,0,11,12], [13,14,15,16,17,18], [0,20,21,22,23,24],[25,26,27,28,29,30], [31,32,33,34,35,0]];
;
RowColumnZeros(matrix2);
console.log(matrix2);


var se;
se.classList.add()


