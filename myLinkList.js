// linkLIst

function Node  () {
    this.val = null;
    this.next = null;
}


function linkList() {
    this.head = new Node();
    this.left=null;
    this.right=null;
}

linkList.prototype.add = function (newEle) {
    var newNode = new Node();
    newNode.val = newEle;  // created new node
    ///
    if(this.head.val === null){
        console.log("xxxxxxxxxx");
        this.head.val = newEle;  // head node is laready created so direct assigning assigning value
    }else {

        var runner = this.head; // this will refer to calling context

        while (runner.next) {
            runner = runner.next;
        }

        runner.next = newNode;

    } // else completed

    console.log(newEle + " added to the list");

};


linkList.prototype.show =function () {

    var runner = this.head;

    while(runner){
        console.log("-> " + runner.val);
        runner = runner.next;
    }

};
//////////////////////////////////

var linklist1 = new linkList();
linklist1.add(11);
linklist1.add(21);
linklist1.add(31);
linklist1.show();

///////////////output/////////////////////////
// xxxxxxxxxx
// added to the list
// 21 added to the list
// 31 added to the list
// -> 11
// -> 21
// -> 31


