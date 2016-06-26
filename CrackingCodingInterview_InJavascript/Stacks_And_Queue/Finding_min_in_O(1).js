/**
 * Created by ratan_000 on 6/26/2016.
 */

/* approach 1 is maintain one variable for min , when min is poped then again gothru the stack for finding the  min and
replacing that one integer.
but above solution doesnot provide constant time , but provides constant space.

*/

// approach2 : for every push maintain one for stack and for each push maintain the min element
// so for every pop pop the second stack and get the peek value

function myStack(){
    var actualStack=[];
    var minStack=[];

    myStack.prototype.push=function(ele){
       /* for first element */
        if(!actualStack.length){
           // first element then push it directly
           actualStack.push(ele);
           minStack.push(ele);
       }else {
             actualStack.push(ele);
            // check what is the last min

            if(ele < minStack[minStack.length-1]){
                 minStack.push(ele); // putting new min element
            }else {
                minStack.push(minStack[minStack.length-1]); // again putting the peek element
            }

        }

        console.log(actualStack);
        console.log(minStack);
    };

    myStack.prototype.pop=function(){
        // make sure you pop  both the elements
        var pop =actualStack.pop();
        console.log("poped:" + pop);
        minStack.pop();
    };

    myStack.prototype.getMin= function () {

        console.log("minimum:" + minStack[minStack.length-1]);
        return minStack[minStack.length-1];
    }
}



/*** execution ***/

var stack = new myStack();
stack.push(100);
stack.push(200);
stack.push(10);
stack.push(1);
stack.push(-1);
stack.push(500);
stack.push(700);

stack.getMin();
stack.pop();
stack.getMin();
stack.pop();
stack.getMin();
stack.pop();
stack.getMin();
stack.pop();
stack.getMin();
stack.pop();
stack.getMin();
stack.pop();
stack.getMin();
stack.pop();


/* output
 [ 100 ]
 [ 100 ]
 [ 100, 200 ]
 [ 100, 100 ]
 [ 100, 200, 10 ]
 [ 100, 100, 10 ]
 [ 100, 200, 10, 1 ]
 [ 100, 100, 10, 1 ]
 [ 100, 200, 10, 1, -1 ]
 [ 100, 100, 10, 1, -1 ]
 [ 100, 200, 10, 1, -1, 500 ]
 [ 100, 100, 10, 1, -1, -1 ]
 [ 100, 200, 10, 1, -1, 500, 700 ]
 [ 100, 100, 10, 1, -1, -1, -1 ]
 minimum:-1
 poped:700
 minimum:-1
 poped:500
 minimum:-1
 poped:-1
 minimum:1
 poped:1
 minimum:10
 poped:10
 minimum:100
 poped:200
 minimum:100
 poped:100


 */








