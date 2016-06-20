
//alert("starting");
var ball=document.getElementById("b1");
var count=1;


ball.addEventListener("click",function(){
    add1();
});

function add1(){
    ball.classList.add("position1");
    count=1;

}

function clearStack(){
    ball.classList.remove("position1");
    ball.classList.remove("position2");
    ball.classList.remove("position3");
}

ball.addEventListener("transitionend",function(){
   // alert("transition ended.." + count);
    if(count == 1){
       clearStack();
        ball.classList.add("position2");
        console.log("exe-1");
        //alert("1");
        count=2;
    } else  if(count == 2){
      clearStack();
        ball.classList.add("position3");
        console.log("exe-2");
        //alert("2");
        count=3;
    } else if(count == 3){
        //  alert("3");
        count=1;
       clearStack();
        ball.classList.add("position1");
        console.log("exe-3");
        //alert("3");

    }
},false);




