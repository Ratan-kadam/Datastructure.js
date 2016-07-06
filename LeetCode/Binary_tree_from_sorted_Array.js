/**
 * Created by ratan_000 on 7/5/2016.
 */
// logic same as merge sort .. find the mid make it node then to left pass the lower list and to right pass thr bigger list


/* Node */
function node(val){
    this.val= val;
    this.left=null;
    this.right=null;
}


function createBinarytree(low,high,arr){

    /* end condition */

    if(low > high){
        return;
    }
    var mid = Math.floor((low + high ) /2);
    var node = new node(arr[mid]);

    node.left = createBinarytree(low,mid-1,arr);
    node.right = createBinarytree(mid+1,high,arr);

 return node;
}

createBinarytree(0,arr.length-1,arr);
