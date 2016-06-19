/**
 * Created by ratan_000 on 3/3/2016.
 */

var Imgcounter = 1; // counter to decide which image has be displayed..
var startTimer, stopInterval;
document.getElementById("img1").classList.add("showMe"); // default picture.
startInter(); // starting timer to show next Images

showCounter();  // display image counter.

function showCounter() {
    document.getElementById("#Timer").innerHTML = Imgcounter;
}

function clearStack() {  // function  for removing all frame opacity
    document.getElementById("img1").classList.remove("showMe");
    document.getElementById("img2").classList.remove("showMe");
    document.getElementById("img3").classList.remove("showMe");
}
function startInter() {
    showCounter();
    startTimer = setInterval(function () {
        ++Imgcounter;
        showCounter();
        if (Imgcounter > 3) { // Resetting counter
            Imgcounter = 1;
            showCounter();
        }
        switch (Imgcounter) {
            case 1:
                clearStack();
                document.getElementById("img1").classList.add("showMe");
                break;
            case 2:
                clearStack();
                document.getElementById("img2").classList.add("showMe");
                break;
            case 3:
                clearStack();
                document.getElementById("img3").classList.add("showMe");
                break;
        }
        showCounter();

    }, 4000);

}

function stopInterval(buttonAction) {  // selecting the next Image and starting the fresh counter
    clearInterval(startTimer); // stopping the Timer
    var temp;
    if (buttonAction == "next") {
        if (Imgcounter < 3) {
            Imgcounter = Imgcounter + 1;
        } else {
            Imgcounter = 1;
        }
        temp = "img" + Imgcounter;
    } else {
        if (Imgcounter == 1) {
            Imgcounter = 4; // so next stml will give result 3
        }
        Imgcounter = Imgcounter - 1;
        temp = "img" + Imgcounter;


    }
    clearStack();
    document.getElementById(temp).classList.add("showMe");
    startInter(); // restarting the counter
}


document.getElementById("next").addEventListener('click', function () {
    stopInterval('next');
});

document.getElementById("prev").addEventListener('click', function () {
    stopInterval('prev');
});