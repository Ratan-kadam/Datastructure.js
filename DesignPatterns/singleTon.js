/**
 * Created by ratan_000 on 6/17/2016.
 */


function myClass(b){
    // checking for existing instance
    if( typeof(myClass.instance) == "object"){
        console.log("already have instace");
        return myClass.instance;
    }

    this.name=b;  // assigning property values

    myClass.instance=this;
    return this;
}

var one = myClass("ratan");
console.log(one.name); // ratan
var two = myClass("kadam");
console.log(two.name); // ratan




