/**
 * Created by ratan_000 on 5/19/2016.
 */
var coins=[7,2,3,6];
// pointing to first coin from con arry
var tsum=13;
var T=[],R=[];

T[13]=0;
R[13]=0;

// initializaing the araay

T.fill(999);  // maximim value
R.fill(-1); // index  value

T[0]=0; // to form total zero 0 coins are required

console.log(T);
console.log(R);


// formulla: min(T[i], T[i - coins[j]] + 1)

for(var j=0;j<coins.length;j++){ // coin loop
    for(var i=0;i<T.length;i++){ // inner loop for total  building intermediate states
        // calculating first part of the array
        var min1 = T[i]; // current value present at index
        console.log(min1);
        if(i -coins[j] > -1) {
            var min2 = T[i - coins[j]] + 1; // +1 adding current coin
            console.log(min2);

            if(min1 < min2){
                T[i] = min1;

            }else{
                T[i] = min2;
            }

            R[i]=j; // saving index from which coin it was updated



        }



    }
}

// after this loop R cointain the coins index i.e. which coin was used to update the min value
tsum= 13;
loopVar = T.length-1;
while(tsum> 0){

    console.log("->"+ R[tsum] + ": " + coins[R[tsum]]);
   tsum= tsum- coins[R[tsum]];
    console.log("newTsum:" + tsum);

}
console.log(R);
console.log("Answer:" + T[13] + ' coins');