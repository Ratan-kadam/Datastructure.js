/**
 * Created by ratan_000 on 6/23/2016.
 */

var str = "I am Ratan Kadam";

// one line solution:
    console.log(str.split(' ').reverse().join(' ').split('').reverse().join('')); // I ma nataR madaK

//Step by solution

//console.log(str.split(' ')); // [ 'I', 'am', 'Ratan', 'Kadam' ]
//console.log(str.split(' ').reverse()); //[ 'Kadam', 'Ratan', 'am', 'I' ]
//console.log(str.split(' ').reverse().join(' '));  // Kadam Ratan am I
//console.log(str.split(' ').reverse().join(' ').split('')); //[ 'K','a','d','a','m', ' ','R','a','t','a','n',' ','a','m',' ','I' ]
//console.log(str.split(' ').reverse().join(' ').split('').reverse()); // [ 'I',' ','m','a',' ','n','a','t','a','R',' ','m','a','d','a','K' ]

//-------------------------------------------------------------------------
// Custom reverse function


var arr=str.split(' ');
for(var i=0;i<arr.length;i++){
     arr[i]=revereMe(arr[i]);
}

console.log("-->" + arr.join(' '));

function revereMe(str){
   var str1= str.split('');
    var last=str1.length-1;
     for(var i=0;i<str1.length/2;i++){
         var temp = str1[i];
         str1[i]=str1[last];
         str1[last] = temp;
         last--;
     }

    return str1.join('');
}

