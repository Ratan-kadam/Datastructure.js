/**
 * Created by ratan_000 on 6/26/2016.
 */

//  we need to stack .. for every pop / peek operation we need to transfer all content from first stack to next stack
// to get the last element for pop.

// to avoid this ..keep pushing new elements to stack1 and once we hit pop / peek() command then transfer all the elememts to stack 2
// keep adding new elements to stack1 and when for pop() the stack2 is empty that time transfer all the elements to stack 2

function myQueue(){
    var stack1=[];
    var stack2=[];


     // private function
    function transferStack1(){
        console.log("tranfering all elements from stack 1 to stack 2: " + stack1);
         while (stack1.length){
             stack2.push(stack1.pop());
         }

        console.log("stack2:" + stack2);
    }

    this.push=function (ele){
       stack1.push(ele); // always push to stack1
        console.log("stack1:" + stack1);
        console.log("stack2:" + stack2);
    };

    this.pop= function(){
      // check for stack2 . if empty then transfer all elemengs from stack2

        if(stack2.length > 0){
            var pop = stack2.pop();
            console.log("poped: " + pop);
            return pop;
        }else {

              transferStack1();

            // now get the first element from stack 1
            var pop = stack2.pop();
            console.log("poped" + pop);
             return pop;
        }
    };

    this.peek= function(){
       // always get from stack2
        if(stack2.length > 0){
        console.log("peek:" + stack2[stack2.length-1]);
       }else {
            transferStack1();
            console.log("peek: "+ stack2[stack2.length-1]);
        }
    }

}

/* execution */
var Queue = new myQueue();
Queue.push(100);
Queue.push(200);
Queue.peek();
Queue.pop();
Queue.pop();
Queue.push(300);

Queue.push(400);
Queue.push(500);
Queue.peek();

