/**
 * Created by ratan_000 on 5/25/2016.
 */
$(document).ready(function(){

    var module2 =(function(){
        console.log("module2  registered =..");
        var a = "module 1";
        var b ="ratan222";
        function sayHi(){
            console.log("----Hii from module 2");
            //module1.fun1("ratan"); // accessing module 1 functionality.
            return true;
        }

        var myp2= $('#p2');

        myp2.click(function () {
            alert("clicked p2");
            console.log("clicked p2");
        });

        sayHi();


        //exposing functionality to other parts.

        return {
            myvar:a,
            fun1:sayHi

        };
    })(); // self executing function



});
