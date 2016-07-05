/**
 * Created by ratan_000 on 7/3/2016.
 */
/*
For example:
    Secret number:  "1807"
Friend's guess: "7810"
Hint: 1 bull and 3 cows. (The bull is 8, the cows are 0, 1 and 7.)
Write a function to return a hint according to the secret number and friend's guess, use A to indicate the bulls and B to indicate the cows. In the above example, your function should return "1A3B".
Please note that both secret number and friend's guess may contain duplicate digits, for example:
Secret number:  "1123"
Friend's guess: "0111"
In this case, the 1st 1 in friend's guess is a bull, the 2nd or 3rd 1 is a cow, and your function should return "1A1B".
    */

/* Approach1 : run first loop and maintain the count &  in same loop check how many map the elements on the same index : i.e. bulls
               make sure we reduce the count if its a bull
             : then in second loop check if the element is not bull then does it has entry and count >1  in map. then cow else ignoew
             : at the end
             */


var secretNum =1807;
var guess=7810;

function bullCowCount(secret,guess)
{
    // converting them to string
    secret = secret+"";
    guess = guess +"";
    var myMap={};
    var bulls=0,cow= 0,others=0;

    // iteration 1 to get the count

    //
    for(var i=0;i<secret.length;i++){
        if(! myMap[secret[i]]){
            myMap[secret[i]] = 1; // first entry
        }else{
            myMap[secret[i]] += 1; // adding the count
        }
    }

    for(var j in myMap){
        console.log(j +":" +myMap[j]);
    }

    // loop 2 : to check bulls .. don't process other elements as if duplicate elements are present then when condition match
    // secret[i] = guess[i] at that time may be the in Map the character count is not present.

    for( i=0;i<secret.length;i++){
        console.log("-->" + secret[i] + "-->" +
            [i]);
        if(secret[i] == guess[i]){
            console.log("........");
            bulls += 1;  // increasing buls count
            myMap[secret[i]] -= 1; // reducing the count from the map
        }
    }

    for(var j in myMap){
        console.log(j +"::" +myMap[j]);
    }
    //loop 3 : to check other than bulls

    for( i=0;i< guess.length;i++){ // running on guess as it might have extra chacters
        if(secret[i] !== guess[i]){ // only check for non bulls

            if(myMap[guess[i]] > 0){
                cow +=1; // increasing cow count
                myMap[guess[i]] -= 1 ; // reducing map count
            }
        }
    }


    console.log(bulls + " Bulls," + cow + " Cows."  );

}


//bullCowCount(secretNum,guess); // 1 Bulls,3 Cows.
bullCowCount(1123,0111);



