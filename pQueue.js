/**
 * Created by ratan_000 on 3/2/2016.
 */
/**
 * Created by ratan_000 on 3/2/2016.
 */

function obj () {
    this.value=null;
    this.priority = 5;
}

function priQueue () {
 // no need to maintain rear as we are going to delete intermediate element according to priority
    this.dataStrore = [] ;
    this.front=-1;
}

priQueue.prototype.enQueue = function  (newEle,priority) {
    var newObj = new obj();
    newObj.value=newEle;
    newObj.priority= priority;
    ++this.front;
    this.dataStrore[this.front] = newObj;
    console.log("Element inserted" + newEle);
};

priQueue.prototype.deQueue = function (){
    if(this.dataStrore[this.front]) {
        var priority=6; // above max
        var index=null;
        for(var i=0; i< this.front; i++){
            if(this.dataStrore[i].priority < priority) {  //finding max priority .. 0 is highest priority
                priority = this.dataStrore[i].priority;
                index=i;
            }
            if(index == null) {
                index= this.front;  // saving index to delete the element from array datastore
            }

        }

        var poped = this.dataStrore[index];
        var indexToBeDeleted = index;
        this.dataStrore.splice(indexToBeDeleted, 1);
        this.front = this.front-1;
        return poped.value;
    }else{
        console.log("No Element to delete");
    }
};

priQueue.prototype.peek = function ()  {
    return  this.dataStrore[this.front].value;
};

priQueue.prototype.length = function (){
    return (this.front + 1);
};

///////////////////
var mypriQueue = new priQueue();
mypriQueue.deQueue();
mypriQueue.enQueue(1,5);
mypriQueue.enQueue(2,4);
mypriQueue.enQueue(3,5);
mypriQueue.enQueue(31,2);
mypriQueue.enQueue(4,5);
console.log("removed: " + mypriQueue.deQueue());
console.log("removed: " + mypriQueue.deQueue());
console.log("Length:"+ mypriQueue.length());
console.log("Peek:"+ mypriQueue.peek());


///////////////////////////output/////////////////////////////
/*
 No Element to delete
 Element inserted1
 Element inserted2
 Element inserted3
 Element inserted31
 Element inserted4
 removed: 31
 removed: 2
 Length:3
 Peek:4

 */


