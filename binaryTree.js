/**
 * Created by ratan_000 on 2/29/2016.
 */
console.log("/***************Binary tree*****************/")


//  Define Node as class and the helper functions ////////////////////////////
function Node () {
     var data=null; // making private.
    this.left=null;
    this.right= null;

    this.setData = function(newdata) {
        this.data = newdata;
    };

    this.getData = function() {
        return this.data;
    };
}


Node.prototype.getLeft = function() {
    return this.left;
};

Node.prototype.getRight = function() {
    return this.right;
};

Node.prototype.setLeft = function(newnode) {
      this.left= newnode;
};

Node.prototype.setRight = function(newnode) {
      this.right= newnode;
};
////////////////////////////////////////////////////
function createTree(arr){
    var Head = new Node();
    var newNode;
    Head=null;  // assigning head to null.

    console.log( "creating tree from" + arr);

    arr.forEach(function(ele){
       // console.log("****************for Element :" + ele);
        newNode = new Node(); // creating new node object.
        newNode.setData(ele);

        if(Head) { //insertion process
           insertToBinary(Head,newNode);
        }else {
            Head = newNode; // assigning Head Node.
           // console.log("//////////Head assigned//////////;");
        }
    });

    return Head;

}
/////////////////////////////////////////////////////
function insertToBinary(head,newNode) {
    //console.log("*******************head: " + head +  "newNode: " + newNode.getData());
    var runner = head; // assigning runner so that we won't loose track of head pointer.
    while(runner) {
      //  console.log("path var -->" + runner.getData());

        if(runner.getData() > newNode.getData()) {
               if(runner.getLeft()) { // might return undefined / null .
                   runner = runner.getLeft();
               }else {
                   runner.setLeft(newNode); // setting new node created in Create binary tree function.
                 //  console.log("Node Inserted.");
                   break;
               }

        }else {
             // if the val is greater
                  if(runner.getRight()){
                      runner= runner.getRight();
                  }else {
                      runner.setRight(newNode); //  setting new node created in Create binary tree function.
                     // console.log("Node Inserted.");
                      break;
                  }
        }


    }

}
////////////////////////Display Tree /////////////////////////
function displayTree(Head)
{
    var queue = [];
    var runner = Head;
    queue.unshift(Head); // putting head into Queue.

    while(queue.length) {
       var poped = queue.pop();
        console.log(" "+ poped.getData());

        if(poped.getLeft()){
              queue.unshift(poped.getLeft());
        }
        if(poped.getRight()){
            queue.unshift(poped.getRight());
        }
    }

    while(queue.length) {
        console.log(queue.pop());
    }
}
////////////////////////INPUT ////////////////////////

var arr= [4,2,5,1,8];
var refPointer1 = createTree(arr);
console.log("*********Binary tree display level wise :******************");
displayTree(refPointer1);


////////////////////////////////////////////////////////


