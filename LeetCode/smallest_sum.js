/**
 * Created by ratan_000 on 7/9/2016.
 */

var array1=[1,4,11,13];
var array2=[2,4,6,7,100];
var result=[];
k=3;

var i= 0,j= 0;
while(k){
    if(result.length){
        var temp1 = array1[i] + array2[j+1];

        var temp2 = array1[i+1] + array2[j];
        console.log(array1[i] + '+' + array2[j+1] +':' +temp1 + '  &   ' + array1[i+1] + '+' + array2[j] +':' + temp2);

        if(temp1 > temp2){

            result.push([array1[i+1],array2[j]]);
             if(array1[i+1] > array2[j]){
                 j++;
             }else{
                 i++;
             }
        }else{
            result.push([array1[i],array2[j+1]]);
            if(array1[i] > array2[j+1]){
                j++;
            }else{
                i++;
            }
        }


        console.log(result);
        k--;
    }else{
        console.log(array1[0],array2[0]);
        result.push([array1[0],array2[0]]); // default first element
       // j++; // incrementing j
        k--;
    }
}