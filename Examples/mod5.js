/**
 * Created by ratan_000 on 5/25/2016.
 */

var mod5 =(function() {
    console.log("comman" + this.comman);
    console.log("module5  registered =..");
    var a = "module 3";
    var b ="ratan333";
    function sayHi(){
        console.log("----Hii from module 5");
        //module1.fun1("ratan"); // accessing module 1 functionality.
        return true;
    }

    var myp2= $('#p1');

    myp2.click(function () {
        alert("clicked p1 from pat 5");
        console.log("clicked p1 from pat 5");
        mod4.fun1("calling module 4 from module 5");
    });

    sayHi();


//exposing functionality to other parts.

    return {
        myvar:a,
        fun1:sayHi

    };
})();
