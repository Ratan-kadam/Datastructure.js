/**
 * Created by ratan_000 on 3/2/2016.
 */
function Queue () {

    this.dataStrore = [] ;
    this.front=-1;
    this.rear=0; // imp
}

Queue.prototype.enqueue = function  (newEle) {
    ++this.front;
    this.dataStrore[this.front] = newEle;

};

Queue.prototype.dequeue = function (){
    if(this.dataStrore[this.front]) {
        var poped = this.dataStrore[this.rear];
        var indexToBeDeleted = this.rear;
        ++this.rear;
        this.dataStrore.splice(indexToBeDeleted, 1);
        return poped;
    }else{
        console.log("No Element to delete");
    }
};

Queue.prototype.peek = function ()  {
    return  this.dataStrore[this.front];
};

Queue.prototype.length = function (){
   var len= (this.front - this.rear) + 1;
    return len;
};

///////////////////
var myQueue = new Queue();
myQueue.dequeue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(31);
myQueue.enqueue(4);
console.log("dequeue : " + myQueue.dequeue());
console.log("Length: " + myQueue.length());

///////////////////////////output/////////////////////////////
/*
 No Element to delete
 dequeue : 1
 Length: 4


 */



