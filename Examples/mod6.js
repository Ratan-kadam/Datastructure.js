/**
 * Created by ratan_000 on 5/25/2016.
 */

var mymodal= (function(mymodal){
    var a="mod7";
    function hi() {
        console.log("inside mod 6");
    }

    return{
        myvar6:a,
        fun6:hi
    }
})(mymodal || {});


console.log("vvvv:");
console.log(mymodal);
