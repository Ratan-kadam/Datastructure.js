(function() {
// capture all the elements
var $secondHand = document.getElementById('second');
var $minuteHand = document.getElementById('minute');
var $hourHand = document.getElementById('hour');

function getTime() {
    var date = new Date();
    var second = date.getSeconds();
    var minutes = date.getMinutes();
    var hour = date.getHours();
    return {
        second,
        minutes,
        hour
    };
}

function calculateDegree(second, minutes, hour) {
    var degreePerMoveForSecond = 360/60; // ==> 6 deg:: degree 360 degree / 60 second in one rotation.
    var degreePerMoveForMinutes = 360/60; // ==> 6 deg:: 60 minutes 360 degree 
    var degreePerMoveForHour = 360/12; // ==>30 deg :: 360/12 12 hours 360 degree
    // calculating additional degree movement because of second / minute completed.
    // how many seconds are completed bases on that current minute + extra degree (within 6 degree will be calculated)
    var minuteExtraDegree = degreePerMoveForMinutes * (second/60); // 30 sec => 1/2 so 6/2 degree ==> 3 degree
    var totalMinuteDegree = (degreePerMoveForMinutes * minutes) +  minuteExtraDegree;
    var hoursExtraDegree = degreePerMoveForHour * (minutes/60);
    var totalhourDegree = (degreePerMoveForHour * hour) + hoursExtraDegree;


    return {
        secondDegree: degreePerMoveForSecond * second,
        minuteDegree: totalMinuteDegree,
        hourDegree: totalhourDegree,
    };
}

function process() {
    var deg = 0;
 setInterval(function() {
    deg = deg + 10;
    const { second, minutes, hour } = getTime();
    const {secondDegree, minuteDegree, hourDegree} = calculateDegree(second, minutes, hour);
    $secondHand.style.transform = "rotate("+secondDegree+"deg)";
    $minuteHand.style.transform = "rotate("+minuteDegree+"deg)";
    $hourHand.style.transform = "rotate("+hourDegree+"deg)";
 }, 1000);
}

process();
})(); // IFFI
