/**
 * Created by ratan_000 on 6/27/2016.
 */

//check if the  array have element like index = value.

// approach 1 : run for loop i& compare a[i] = i ; // complexity o(n).

// approach2  : Binary search : complexity : O(n)


var input=[-40,-20,-1,1,2,3,5,7,9,12,13]; //  7 is the answer

function findMagic(input){
     return getMe(input,0,input.length); // play with index not value

}


function getMe(arr,start,end){
    console.log(start,end);
    if(start > end){
        console.log("ending the program");
        return false;
    }
    var mid = (start + end) /2 ;
    if(mid === arr[mid]){

        console.log("found! : " + mid  + ":" +arr[mid]);
         return true;
    }

    if(mid < arr[mid]){
        /* need to search right */
       return getMe(arr,mid+1,end);
    }else{
        return getMe(arr,0,mid);
    }



}


/* execution */

findMagic(input);