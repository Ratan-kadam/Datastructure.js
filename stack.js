/**
 * Created by ratan_000 on 3/2/2016.
 */

function stack () {

    this.dataStrore = [] ;
    this.top=-1;
}

stack.prototype.push = function  (newEle) {
     ++this.top;
     this.dataStrore[this.top] = newEle;

};

stack.prototype.pop = function (){
       var poped =  this.dataStrore[this.top];
         this.dataStrore.splice(this.top,1);
          this.top--;
            return poped;

};

stack.prototype.peek = function ()  {
    return  this.dataStrore[this.top];

};

/////////

var mystack = new stack();

mystack.push(5);
mystack.push(4);
mystack.push(3);
mystack.pop();
mystack.push(31);
console.log("peek: "+ mystack.peek());
mystack.push(2);
mystack.push(1);
console.log("peek: "+mystack.peek());

while(mystack.peek() ) {
    console.log(" : " + mystack.pop());

}


/*  /////////////////////////output  ////////////////////////

 peek: 3
 peek: 1
 : 1
 : 2
 : 3
 : 4
 : 5

 F:\datastr

 */




