/**
 * Created by ratan_000 on 3/1/2016.
 */
// javascript linkelist implementation- Ratan .

// creation of class node.

function Node ()
{
    this.head = {
        val:null,
        next:null
    };
}

// creating function using prototype to create implicit link.


Node.prototype.push = function (newEle)
{
    // creation of new node for attaching to existing head.
    var newNode= {
        val:newEle,
        next: null
    };

    if(this.head.val === null)
    {
        console.log("Head is Null .. assigning " + newEle+ " as Head.");
        this.head = newNode;
    }else
    {
        // travesing till the end of the Node.
        // getting extra pointer as we don't want to loose head pointer.
        var runner = this.head;
        while(runner.next)
        {
            runner = runner.next;
        }
        runner.next= newNode;
        console.log("Added " + newEle + " to the linklist..");
    }
};

Node.prototype.show= function() {
    var runner = this.head;
    while(runner.next)
    {
        console.log("->" + runner.val);
        runner = runner.next;
    }
    console.log("->" + runner.val); // displaying last element.

};

var linklist1 = new Node();
linklist1.push(1);
linklist1.push(2);
linklist1.push(4);
linklist1.show();

//console.log("---"+ linklist1.head.next.val);