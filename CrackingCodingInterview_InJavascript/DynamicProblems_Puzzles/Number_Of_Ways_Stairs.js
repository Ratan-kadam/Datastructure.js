/**
 * Created by ratan_000 on 8/10/2016.
 */

function getToatlWays(n){ // n is number of total stairs
    if(n<=1){
        return n;
    }
    return getToatlWays(n-1) + getToatlWays(n-2); // allowed only one and two steps
}

// whatever are the steps always pass one more extra to step

// so create new function

function countWays(n){
     return getToatlWays(n+1);
}

console.log("-->" + countWays(2));
