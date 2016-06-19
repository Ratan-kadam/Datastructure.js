/**
 * Created by ratan_000 on 6/17/2016.
 */

function Observable(){ // to be observe
    var myData="100";
    this.Observers=[];
    this.setData= function (newval) {
        myData=newval;
        console.log("publishing started ..");
        this.publish(myData); // once new data is set updating the users
    }
}

function Observer(){
    this.updateMe= function(newData){
       console.log("  new updated value received.." + newData);
    };
}

Observable.prototype.addObserver = function (obj){
   this.Observers.push[obj];
};

Observable.prototype.RemoveObserver = function (obj){
    for(var i=0;i<this.Observers.length;i++){
        if(this.Observers.indexOf(obj)> -1 ){
            // observer present
            this.Observers.splice[this.Observers.indexOf(obj),1]; // removing the observer
        }
    }

};

Observable.prototype.publish= function(newVal){
    console.log(".");
    for(var i=0;i<this.Observers.length;i++){
        this.Observers[i].updateMe(newVal);
    }
};

/* run */

var myObservable = new Observable();
var myObserver1 = new Observer();
var myObserver2 = new Observer();
var myObserver3 = new Observer();

/* adding observers to list */
myObservable.addObserver(myObserver1);
myObservable.addObserver(myObserver2);
myObservable.addObserver(myObserver3);

// changing the value -

myObservable.setData(100);

/* output */
