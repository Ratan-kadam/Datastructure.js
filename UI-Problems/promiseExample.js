/**
 * Created by ratan_000 on 6/20/2016.
 */

    /* syntax
var myPromise = new promise(function (resolve,reject) {});
*/

// main promise
var myPromise = new Promise(function (resolve,reject) {
    console.log("inside promise");
    //async call
    setTimeout(function(){console.log("executed");
        // ajax call and decide as pwer the data to resolve or reject
    resolve("ratan");
    },2000);
});

// define chaning .. even though you ahave paramertres don't write direct use at fucntion / make sure you return the function
myPromise.then(success1,fail1)
    .then(success2,fail2);

/* all .then : success / fail functions functions */

function success1(a){
        console.log("this is success1 " + a + "and now executing the new callback");
    // another async call
      return new Promise(function(resolve,reject){
           setTimeout(function(){
               console.log("second promise executing");
               resolve("kadam");
           },2000);
      });

}

function success2(a){
    console.log("this is success2  "+ a);
}

function fail1(a){
    console.log("this is fail1  "+ a);
}

function fail2(a){
    console.log("this is fail2  "+ a);
}

/* output
 executed
 this is success1 ratanand now executing the new callback
 second promise executing
 this is success2  kadam

*/




