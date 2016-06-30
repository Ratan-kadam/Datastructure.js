/**
 * Created by ratan_000 on 6/29/2016.
 */

/* calculate m ^ n */

function calculate(num,pow){
    // base condition
       if(pow == 1){
           return num ;
       }

    if(pow % 2 == 0){
        console.log(pow);;
        // even
        return calculate(num,Math.floor(pow/2)) * calculate(num,Math.floor(pow/2));
    }
}

 console.log(calculate(2,4));


/*
so reach to top and then return 2
11 11 11 11 11 11 11 11 11 =16 2* 16
2 2 2 2  2 2 2 2
4 4  4  4
8 8
16
 */

