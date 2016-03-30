/**
 * Created by ratan_000 on 3/30/2016.
 */

// Breadth first search - is level wise traversal so used queue.

// Creation of binary search tree


function Node(){
    this.val=null;
    this.left=null;
    this.right=null;
}
//

function binaryTree() {
  this.head = new Node();
}



binaryTree.prototype.add = function(ele) {
    console.log("---Adding: " + ele);
    if(this.head.val == null){
        this.head.val = ele;
        console.log("---Adding: HEAD " + ele);
        return;
    }

    // creation of new object :
    var newObj = new Node();
    newObj.val= ele;
    // checking right place to insert
    var traversal  = this.head;
    while (true) {
        console.log("---" + ele +":"+ traversal.val);
        if(ele < traversal.val){
               if(traversal.left != undefined){
                   traversal = traversal.left;
               }else{
                   traversal.left = newObj;
                   console.log("---Added to LEFT of "+ traversal.val +": "+ ele);
                   return;
               }
        }else{
            // data is higher:
            if(traversal.right !=undefined){
                traversal = traversal.right;
            }else{
                traversal.right = newObj;
                console.log("---Added: " + ele);
                return;
            }
        }
    }



};

binaryTree.prototype.remove = function() {

};

binaryTree.prototype.BFS = function() {
  var Queue =[];
   Queue.unshift(this.head);
    while(Queue.length > 0 ){
        var poped = Queue.pop();
        console.log(poped.val);
        if(poped.left != null){
            Queue.unshift(poped.left);
        }
        if(poped.right != null){
            Queue.unshift(poped.right);
        }
    }
};

///
var myTree = new binaryTree();
myTree.add(5);
myTree.add(3);
myTree.add(10);
myTree.add(1);
myTree.add(4);
myTree.add(7);
myTree.add(12);
myTree.BFS();

