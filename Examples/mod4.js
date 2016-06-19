/**
 * Created by ratan_000 on 5/25/2016.
 */
var mod4 = (function() {
    console.log("comman" + this.comman);
    console.log("module4  registered =..");
    var a = "module 3";
    var b ="ratan333";
    function sayHi(){
        console.log("----Hii from module 4");
        //module1.fun1("ratan"); // accessing module 1 functionality.
        return true;
    }

    var myp2= $('#p2');

    myp2.click(function () {
        alert("clicked p2 from pat 4");
        console.log("clicked p2 from pat 4");
       // module1.fun1("calling module 1 from module 4");
    });

    sayHi();


//exposing functionality to other parts.

    return {
        myvar:a,
        fun1:sayHi

    }; console.log("comman" + this.comman);
    console.log("module4  registered =..");
    var a = "module 3";
    var b ="ratan333";
    function sayHi(){
        console.log("----Hii from module 4");
        //module1.fun1("ratan"); // accessing module 1 functionality.
        return true;
    }

    var myp2= $('#p2');

    myp2.click(function () {
        alert("clicked p2 from pat 4");
        console.log("clicked p2 from pat 4");
        // module1.fun1("calling module 1 from module 4");
    });

    sayHi();


//exposing functionality to other parts.

    return {
        myvar:a,
        fun1:sayHi

    };
})();



