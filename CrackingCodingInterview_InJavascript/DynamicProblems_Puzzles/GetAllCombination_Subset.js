/**
 * Created by ratan_000 on 6/27/2016.
 */


function getCombinations(arr){
    var final=[];
    function getIt(pre,next){
        var com=[];
        for(var i=0;i<next.length;i++){
            com.push(pre+ next[i]);
            getIt(pre+next[i], next.slice(i+1));
        }
        if(com.length){
            final.push(com);
        }

    }

    getIt("",arr);
    console.log("final: " + ":" + final );

}

getCombinations(["a","b","c","d"]);