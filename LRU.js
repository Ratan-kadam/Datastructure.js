/**
 * Created by ratan_000 on 5/17/2016.
 */
/* list recently used */

function Node (val){ // doubly linklist node
    this.val=val;
    this.next=null;
    this.prev=null;
}



function LRU (size){  // LRU class
   this.Lruhead = new Node(null);
    this.tail=  this.Lruhead;// will move to end as insert/update progress

    this.LRUlength=size;
    this.myMap={};// storing all the keys and respective node (key/val/next/prev)
}

LRU.prototype.update = function (key) {
    console.log("key at update:" +  key);
    var currNode =this.myMap[key];

    if(currNode.next && currNode.prev) {
        console.log("both are present");
        currNode.next.prev = currNode.prev;
        currNode.prev.next = currNode.next;

        this.tail.next = currNode;
        currNode.next = null;  // as this is last element
        currNode.prev = this.tail;
        this.tail = currNode;

    }else if(! currNode.prev){
        console.log("first element targetted");
        // first element.
        // add the element to last
        // moving the head to next step
        this.tail.next=currNode; // attaching to last node
        currNode.prev=this.tail;
        currNode.next = null;
        this.Lruhead = this.Lruhead.next;

    }


};



LRU.prototype.getMe = function (key){
    console.log("key in map: "  + this.myMap[key]);
   if(this.myMap[key]) {
       // element present get the node modify the pointers
       this.update(key);

   }else{
       console.log("element not present");
   }
};

LRU.prototype.addElement = function(ele) {

    if(this.Lruhead.val == null){
        this.Lruhead.val=ele;
        this.myMap[ele] = this.Lruhead;
    }else{
        // elements next to head
        var newNode = new Node(ele) ; // created new element
        var head1 = this.Lruhead;
        while(head1.next !=null){
            head1=head1.next;
        }
        head1.next= newNode;
        this.tail=newNode; // always pointing to last node of the doubly linklist.
        newNode.prev= head1; // setting the previous link of new node
        this.myMap[ele] = newNode; // saving node to myMap key : node(key,val,next,prev)
    }
};

LRU.prototype.displayLRU = function () {
    var head1 = this.Lruhead;
    var tail1 = this.tail;

    while(head1 != null){


        console.log(head1.val);
        setTimeout(function(){
            console.log("printing");
        },2000);
        head1=head1.next;
    }

    console.log("-----");

    while(tail1 != null){
        console.log(tail1.val);
        setTimeout(function(){
            console.log("printing from tail");
        },5000);
        tail1=tail1.prev;
    } console.log("---");



};


var myLRU = new LRU(5);
myLRU.addElement(1);
myLRU.addElement(2);
myLRU.addElement(3);
myLRU.addElement(4);
myLRU.addElement(5);

//myLRU.displayLRU();
myLRU.getMe(1);
console.log("-----0000-----");
myLRU.displayLRU();
