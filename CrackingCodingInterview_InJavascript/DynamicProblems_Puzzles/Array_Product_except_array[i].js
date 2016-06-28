/**
 * Created by ratan_000 on 6/28/2016.
 */

/*
Given an array arr[] of n integers, construct a Product Array prod[] (of same size) such that prod[i] is equal to the product of all the elements of arr[] except arr[i]. Solve it without division operator and in O(n).

    Example:
arr[] = {10, 3, 5, 6, 2}
prod[] = {180, 600, 360, 300, 900}

    */

// If divide is allowed: approach1 : get all the product in forst loop then for each element divide that element by that number.
// Without divide : run 2 loops .. first for getting product all elements to its right
// run second loop to from last to get the product of element to the right
// in third loop product left and right will provide you the result

var arr = [10, 3, 5, 6, 2];
var prod = [180, 600, 360, 300, 900];

function getProduct(arr){

    var len= arr.length;
    var left=[];
    var right=[];
    var product=[];


    // first loop

    left[0]=1; // always 1

    for(var i=1;i<len;i++){ // starting from index 1 i.e. 2nd element

       left[i]= arr[i-1] * left[i-1]; // arr[i] * left[i] is stored to left[i+1] -->left sum

    }


    right[len-1]=1; // always 1

    for(i=len-2; i >= 0; i--){ // starting from second last .. last already defind 1

        right[i]= arr[i+1] * right[i+1]; // arr[i] * left[i] is stored to left[i+1] -->left sum

    }

    console.log(left);
    console.log(right);

    // final loop to get the product
    for(var i=0;i<arr.length;i++){
       product[i]= left[i] * right[i];
    }
    console.log(arr);
    console.log("RESULT");
    console.log(product);
}

/*** execution **/


getProduct(arr);

/** output
 *
RESULT
    [ 180, 600, 360, 300, 900 ]
 */




