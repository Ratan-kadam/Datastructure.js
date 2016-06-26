
var Hours;
var minutes;
var seconds;
var myTimer;

//init

init();

function init() {
    Hours=0;
    minutes=0;
    seconds=0;
    document.getElementsByClassName("seconds")[0].innerHTML = seconds;
    document.getElementsByClassName("hours")[0].innerHTML = Hours;
    document.getElementsByClassName("minutes")[0].innerHTML = minutes;
}


document.getElementsByClassName("stop")[0].addEventListener("click",handleMe("stop"));
document.getElementsByClassName("reset")[0].addEventListener("click",handleMe("reset"));
document.getElementsByClassName("start")[0].addEventListener("click",handleMe("start"));


function startTimer() {
    myTimer=setInterval (function(){
        seconds +=1;
        checkMe(seconds);
    },1000);
}



function handleMe(operation){
return function() {
    if (operation == "stop") {
        clearInterval(myTimer);
    } else if (operation == "start") {
        startTimer();
    }  else if (operation == "reset") {
        clearInterval(myTimer);
       init();
    }
}

}




function checkMe(updatedSeconds){
  var minuteFlag=false;
    var hourFlag=false;
    if(updatedSeconds > 60){
        seconds=0;
        minutes +=1; // increased minuts
        minuteFlag=true; // flag fro

        if(minutes > 60){
         hourFlag=true;
            minutes=0;
            Hours +=1;  // increase minutes

        }

    }

   updateScreen(hourFlag,minuteFlag);
}

function updateScreen(Hflag,Mflag){

    console.log(Hours + ":" + minutes + ":" + seconds);
    document.getElementsByClassName("seconds")[0].innerHTML = seconds;  // always need to update

    if(Mflag){
        document.getElementsByClassName("minutes")[0].innerHTML = minutes;  // need to check if minutes is true


        if(Hflag){
            document.getElementsByClassName("hours")[0].innerHTML = Hours;
        }
    }


}
