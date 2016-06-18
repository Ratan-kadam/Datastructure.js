/**
 * Created by ratan_000 on 6/17/2016.
 */

// decorator design pattern, the base object is wrapped along multiple classes/ function to get the final output
// for example burger/icecreame as per topping wrapp the existing product into new topping to get the latest value

// iceCream


/* class */

function iceCream() {
    this.price=10;
}

/* toppins   every one expecting object of icecream*/
function caramel(previous){
     previous.price +=1;
    return previous;

}

function hotFudge(previous){
    previous.price +=2;
    return previous;
}

function oreo(previous){
    previous.price +=3;
    return previous;
}

function sprinkler(previous){
    previous.price +=4;
    return previous;
}

/* run */

var basicIceCream = new iceCream();
// decorator - wrwpping basic icecreame as per the topping added by user
var finalIceCream=  sprinkler(oreo(hotFudge(caramel(basicIceCream))));
console.log("Total Price" + finalIceCream.price);


// so from UI - when ever a new topping is added will create a list and then create below representation ;

/*

 var mapping={
 oreo = function oreo{},
 sprinkeler = function sprinkler(){}
 };


function wrapME(Obj,func){
return func(obj);
}



while (toppings.length > 0){
    var localFunction = mapping[topping[lenght]]; // retriving function from obj;
    updatedObj =localfunction(updatedObj);

}

console.log(updated.obj.price);
 */



