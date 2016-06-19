/**
 * Created by ratan_000 on 5/25/2016.
 */

mymodal.sub= (function(mymodal){
   var a="mod7";
    function hi() {
        console.log("inside mod 7");
    }

    return{
        myvar:a,
        fun7:hi
    }
})(mymodal || {});

console.log("vvvv:");
console.log(mymodal);


var mymod=(function(){
    var a=1;
    function accessMe(){
        console.log("I have private a"+ this.a);
    }

    return{
        myfun1:accessMe
    }
})();