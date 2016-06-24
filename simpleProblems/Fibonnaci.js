/**
 * Created by ratan_000 on 6/23/2016.
 */


function fibo(n){

   var sum =0; var a=0; var b =1;
    for(var i=1;i<=n;i++){

        a=sum;
        b=i;
        sum =a+b;
        console.log(sum);


    }

    console.log(sum);
}

fibo(5);
