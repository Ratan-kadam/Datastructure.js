
/**
 * Created by ratan_000 on 3/28/2016.
 */

function Heap() {
    this.content=[];
};

Heap.prototype.insert= function(ele){
    // always inserting at the end.
    this.content[this.content.length] = ele;
    var  n =  this.content.length - 1;

    var childIndex = n;
    // finding parent of the newly inserted element.

    if(this.content.length > 1) {
        var parentIndex =  Math.floor((n-1)/2);
        this.bubbleUp(parentIndex, childIndex);
    }
};


Heap.prototype.bubbleUp = function (parentIndex, childIndex) {
    console.log("parentIndex: " + parentIndex + " Val:" + this.content[parentIndex]+  " childIndex: " + childIndex + " Val:" + this.content[childIndex]);
    console.log("Heap:");
    console.log(this.content);
    if (this.content[parentIndex] < this.content[childIndex]) {
        var temp = this.content[parentIndex];
        this.content[parentIndex] = this.content[childIndex];
        this.content[childIndex] = temp;

        console.log("Heap after Swapping:");
        console.log(this.content);

    }


        var newParent = Math.floor((parentIndex-1)/2);

        if((newParent >= 0) && (this.content[newParent] < this.content[parentIndex])) {
            this.bubbleUp(newParent, parentIndex);
        }
    };


Heap.prototype.delete = function(ele) {
    this.content[0] = this.content[this.content.length-1];
    this.content.splice(this.content.length-1,1);
    console.log("Heap after deletion:");
    console.log(this.content);

    this.bubbleDown(0);
};

Heap.prototype.bubbleDown= function (rootIndex){
console.log("Root:" +root + " val :" +  this.content[rootIndex]);
    var leftChild = 2* rootIndex + 1;
    var rightChild = 2* rootIndex + 2;
    var rootVal = this.content[rootIndex];

    if(leftChild > this.content.length/2){
        return;
    }

    if(this.content[leftChild] < this.content[rightChild]){
       var swapIndex = rightChild;
    }else {
         swapIndex = leftChild;
    }

    if(this.content[rootIndex] < this.content[swapIndex]){
        var temp = this.content[rootIndex];
        this.content[rootIndex] = this.content[swapIndex];
        this.content[swapIndex] = temp;
        console.log(this.content);
        this.bubbleDown(swapIndex);
    }

};

///// Execution //////
var myHeap = new Heap();
console.log("--------------inserting 1---------");
myHeap.insert(1);
console.log("--------------inserting 2---------");
myHeap.insert(2);
console.log("--------------inserting 3---------");
myHeap.insert(3);
console.log("--------------inserting 14---------");
myHeap.insert(14);
console.log("--------------inserting 26---------");
myHeap.insert(26);
console.log("--------------inserting 31---------");
myHeap.insert(31);
//--------------------------------------------
console.log("--------------deleting root 31---------");
myHeap.delete();
console.log("--------------deleting root 26---------");
myHeap.delete();


///**** output ****

/*
 --------------inserting 1---------
 --------------inserting 2---------
 parentIndex: 0 Val:1 childIndex: 1 Val:2
 Heap:
 [ 1, 2 ]
 Heap after Swapping:
 [ 2, 1 ]
 --------------inserting 3---------
 parentIndex: 0 Val:2 childIndex: 2 Val:3
 Heap:
 [ 2, 1, 3 ]
 Heap after Swapping:
 [ 3, 1, 2 ]
 --------------inserting 14---------
 parentIndex: 1 Val:1 childIndex: 3 Val:14
 Heap:
 [ 3, 1, 2, 14 ]
 Heap after Swapping:
 [ 3, 14, 2, 1 ]
 parentIndex: 0 Val:3 childIndex: 1 Val:14
 Heap:
 [ 3, 14, 2, 1 ]
 Heap after Swapping:
 [ 14, 3, 2, 1 ]
 --------------inserting 26---------
 parentIndex: 1 Val:3 childIndex: 4 Val:26
 Heap:
 [ 14, 3, 2, 1, 26 ]
 Heap after Swapping:
 [ 14, 26, 2, 1, 3 ]
 parentIndex: 0 Val:14 childIndex: 1 Val:26
 Heap:
 [ 14, 26, 2, 1, 3 ]
 Heap after Swapping:
 [ 26, 14, 2, 1, 3 ]
 --------------inserting 31---------
 parentIndex: 2 Val:2 childIndex: 5 Val:31
 Heap:
 [ 26, 14, 2, 1, 3, 31 ]
 Heap after Swapping:
 [ 26, 14, 31, 1, 3, 2 ]
 parentIndex: 0 Val:26 childIndex: 2 Val:31
 Heap:
 [ 26, 14, 31, 1, 3, 2 ]
 Heap after Swapping:
 [ 31, 14, 26, 1, 3, 2 ]
 --------------deleting root 31---------
 Heap after deletion:
 [ 2, 14, 26, 1, 3 ]
 Root:[object global] val :2
 [ 26, 14, 2, 1, 3 ]
 Root:[object global] val :2
 --------------deleting root 26---------
 Heap after deletion:
 [ 3, 14, 2, 1 ]
 Root:[object global] val :3
 [ 14, 3, 2, 1 ]
 Root:[object global] val :3

 */

