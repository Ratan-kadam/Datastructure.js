/**
 * Created by ratan_000 on 3/1/2016.
 */

function Dictionary() {
    this.dataStore = [] // will use arry to store the key / value.
}

Dictionary.prototype.add= function (key,value){

    this.dataStore[key] = value;
};

Dictionary.prototype.find= function(key) {
console.log("kkk");
    if(this.dataStore[key])
    { return this.dataStore[key]; }
};


Dictionary.prototype.delete= function(key) {

    if(this.dataStore[key])
    {
        delete this.dataStore[key];  // this will not reduce space.
    }
};

Dictionary.prototype.deleteRestructure= function(key) {
  if(this.dataStore[key]){
      this.dataStore.splice(key);
  }
};

Dictionary.prototype.show = function()
{

    for(var key in this.dataStore) {
        console.log(key  +" : "+ this.dataStore[key]);
    }

};


////////////////////////////////
 var myDictionary = new Dictionary();
myDictionary.add("name","kadam");
myDictionary.add("place","sanjose");
myDictionary.add("country","US");
myDictionary.show();
console.log(myDictionary.find("place"));
