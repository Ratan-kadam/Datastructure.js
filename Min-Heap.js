/**
 * Created by ratan_000 on 3/29/2016.
 */


function Heap() {
    this.content=[];
};

//insert function
 Heap.prototype.insert= function(ele) {
    var n = this.content.length;
     this.content[n] = ele;
     console.log("heap:");
     console.log(this.content);
     var lastIndex = this.content.length -1;
     if(this.content.length > 1){
         this.bubbleUp(lastIndex );
     }
 };
//delete function - always delete root
Heap.prototype.delete= function() {
    console.log(this.content);
    this.content[0] = this.content[this.content.length -1];
    this.content.splice(this.content.length-1,1);
    console.log("replacing the root by last element:");
    console.log(this.content);
    this.bubbleDown(0);  // always root


};

//bubble up called when - Inserting a node.

Heap.prototype.bubbleUp=function(eleIndex){

    var parentIndex = Math.floor((eleIndex-1)/2);
    var childIndex = eleIndex;
    console.log("ParentIndex: " + parentIndex + " childIndex: " + childIndex );
    if(parentIndex < 0) { // stop if have reached the root element i.e. Heap[0];
        console.log("returning..");
        return;
    }

    if(this.content[parentIndex] > this.content[childIndex]){
        var temp = this.content[parentIndex];
        this.content[parentIndex] = this.content[childIndex];
        this.content[childIndex] = temp;
        console.log("After swapping: Heap");
        console.log(this.content);
        this.bubbleUp(parentIndex);  // recursive call .. values are changes but we are interested in index
    }

};

//Bubble down called when particular element is deleted from Heap.
Heap.prototype.bubbleDown=function(rootIndex){
    //calculating child element lowest for replacing.
    var leftChildIndex = rootIndex *2+1;
    var rightChildIndex = rootIndex *2 +2;

    if(rightChildIndex >= this.content.length){
        console.log(this.content);
        return;
    }
    var swapIndex;
    //console.log("***");
   // console.log(this.content[leftChildIndex] + ": " + this.content[rightChildIndex]);
    if(this.content[leftChildIndex] < this.content[rightChildIndex]){
        swapIndex = leftChildIndex;
    }else{
        swapIndex = rightChildIndex;
    }

    console.log("swapIndex:" +swapIndex +" " + "Val:" + this.content[swapIndex]);

    if(this.content[swapIndex] < this.content[rootIndex]){
        var temp = this.content[swapIndex];
        this.content[swapIndex] = this.content[rootIndex];
        this.content[rootIndex] = temp;
        console.log("Heap after Swapping : ");
        console.log(this.content);
        this.bubbleDown(swapIndex); // swapindex is the new root
    }
};
/* to delete perticular element */
Heap.prototype.delete1= function(ele) {
    var eleIndex = this.content.indexOf(ele);
    //  console.log(this.content);
    this.content[eleIndex] = this.content[this.content.length -1];
    this.content.splice(this.content.length-1,1);
    // console.log("replacing the root by last element:");
    // console.log(this.content);
    this.bubbleDown(eleIndex);  // always root


};


//*

var myHeap = new Heap();
console.log("--------------inserting 31---------");
myHeap.insert(31);
console.log("--------------inserting 26---------");
myHeap.insert(26);
console.log("--------------inserting 14---------");
myHeap.insert(14);
console.log("--------------inserting 3---------");
myHeap.insert(3);
console.log("--------------inserting 2---------");
myHeap.insert(2);
console.log("--------------inserting 1---------");
myHeap.insert(1);
console.log("--------------deleting 1---------");
myHeap.delete();
console.log("--------------deleting 3---------");
myHeap.delete();

/* output

 --------------inserting 31---------
 heap:
 [ 31 ]
 --------------inserting 26---------
 heap:
 [ 31, 26 ]
 ParentIndex: 0 childIndex: 1
 After swapping: Heap
 [ 26, 31 ]
 ParentIndex: -1 childIndex: 0
 returning..
 --------------inserting 14---------
 heap:
 [ 26, 31, 14 ]
 ParentIndex: 0 childIndex: 2
 After swapping: Heap
 [ 14, 31, 26 ]
 ParentIndex: -1 childIndex: 0
 returning..
 --------------inserting 3---------
 heap:
 [ 14, 31, 26, 3 ]
 ParentIndex: 1 childIndex: 3
 After swapping: Heap
 [ 14, 3, 26, 31 ]
 ParentIndex: 0 childIndex: 1
 After swapping: Heap
 [ 3, 14, 26, 31 ]
 ParentIndex: -1 childIndex: 0
 returning..
 --------------inserting 2---------
 heap:
 [ 3, 14, 26, 31, 2 ]
 ParentIndex: 1 childIndex: 4
 After swapping: Heap
 [ 3, 2, 26, 31, 14 ]
 ParentIndex: 0 childIndex: 1
 After swapping: Heap
 [ 2, 3, 26, 31, 14 ]
 ParentIndex: -1 childIndex: 0
 returning..
 --------------inserting 1---------
 heap:
 [ 2, 3, 26, 31, 14, 1 ]
 ParentIndex: 2 childIndex: 5
 After swapping: Heap
 [ 2, 3, 1, 31, 14, 26 ]
 ParentIndex: 0 childIndex: 2
 After swapping: Heap
 [ 1, 3, 2, 31, 14, 26 ]
 ParentIndex: -1 childIndex: 0
 returning..
 --------------deleting 1---------
 [ 1, 3, 2, 31, 14, 26 ]
 replacing the root by last element:
 [ 26, 3, 2, 31, 14 ]
 swapIndex:2 Val:2
 Heap after Swapping :
 [ 2, 3, 26, 31, 14 ]
 [ 2, 3, 26, 31, 14 ]
 --------------deleting 3---------
 [ 2, 3, 26, 31, 14 ]
 replacing the root by last element:
 [ 14, 3, 26, 31 ]
 swapIndex:1 Val:3
 Heap after Swapping :
 [ 3, 14, 26, 31 ]
 [ 3, 14, 26, 31 ]

 */




