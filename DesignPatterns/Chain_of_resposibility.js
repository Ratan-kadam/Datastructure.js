/**
 * Created by ratan_000 on 6/24/2016.
 */
// how it works : the first receiver (obj) check if he can handle the input , if not then he just pass the input to the next obj in chain
// the chain that we are creating (the next) can be object that belong to same function (class) or different class.

// initial receiver which is able to handle
function handleInput(){

    // handler function
    var processMe = function(input){
        if(typeof(input) == "string") {
            console.log("I am first received & I am able to handle this request");
            return true;
        }else {
            console.log("I am first received & Passing this request to next handler");
            if (nextHandler) {
                nextHandler.processMe(input);
            }
        }
    };
    // Next Handler
    var nextHandler=null;
    // Function of setting next handler
    var setNext = function (obj) {
        nextHandler =obj;
    };

    // Exposing Api
    this.processMe = processMe;
    this.setNext = setNext;
};

// second handler

function handleObj(){
    // handler function
    var processMe = function(input){
        if(typeof(input) == "object"  && (! Array.isArray(input))) {
            console.log("I am second received & I am able to handle this request");
            return true;
        }else{
            console.log("I am second received & Passing this request to next handler");
            if(nextHandler) {
                nextHandler.processMe(input);
            }
        }
    };
    // Next Handler
    var nextHandler=null;
    // Function of setting next handler
    var setNext = function (obj) {
        nextHandler =obj;
    };

    // Exposing Api
    this.processMe = processMe;
    this.setNext = setNext;
}

// third Handler

function handleArray(){
    // handler function
    var processMe = function(input){
        if(typeof(input) == "object" && Array.isArray(input)) {
            console.log("I am second received & I am able to handle this request");
            return true;
        }else{
            console.log("I am second received & Passing this request to next handler");
            if(nextHandler) {
                nextHandler.processMe(input);
            }
        }
    };
    // Next Handlet
    var nextHandler=null;
    // Function of setting next handler
    var setNext = function (obj) {
        nextHandler =obj;
    };

    // Exposing Api
    this.processMe = processMe;
    this.setNext = setNext;
}

/////////// setting the next object of every handler ///////////////////

// first creating object of second and third  Class/functions

var handleInput1= new handleInput();
var handleObj2= new handleObj();
var handleObj3= new handleArray();

// setting the next handlers

handleInput1.setNext(handleObj2);
handleObj2.setNext(handleObj3);

///  main -- execution  ////

var myInput = "This is String";
var myInput2 = {
    a:1,
    b:3
};
var myInput3 =[1,2,3];

// sending String
console.log("********* for Input :" +myInput);
handleInput1.processMe(myInput);
console.log("********* for Input :" +myInput2);
handleInput1.processMe(myInput2);
console.log("********* for Input :" +myInput3);
handleInput1.processMe(myInput3);

/* OutPut
 C:\Users\ratan_000\Desktop\Design-Patterns>node Chain-of-Responsibility.js
 ********* for Input :This is String
 I am first received & I am able to handle this request
 ********* for Input :[object Object]
 I am first received & Passing this request to next handler
 I am second received & I am able to handle this request
 ********* for Input :[1,2,3]
 I am first received & Passing this request to next handler
 I am second received & Passing this request to next handler
 I am second received & I am able to handle this request
 */