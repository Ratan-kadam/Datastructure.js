// () around the function creates the function expression.
'use strict';

var g =7;
var comman="comman";

$(document).ready(function(){
var module1 =(function(){
 console.log("module1  registered =..");
    var a = "module 1";
   // para1 =1;
    g=9; // can access outer global variable

    var myp1 = $('#p1');
    console.log("-->" + myp1.text());
    var myp2= $('#p2');

    myp1.click(function () {
        alert("clicked p1");
        console.log("clicked p1");
    });


    function sayHi(name){
        console.log("----Hii" + name);
        return true;
    }
    //sayHi("From internal module1.."); // even though there are two sayHi function in the entire file

    //exposing functionality to other parts.

    return {
        myvar:a,
        fun1:sayHi

    };
})(); // self executing function

});

/*
console.log("module2.a :" + module2.a ); // undefined -> as we have exposed this with myvar variable. and direct accessing is not allowed
console.log("module2.a :" + module2.myvar ); // works
console.log("module2.b :" + module2.b ); // works
console.log("para: "+ + g);
*/



