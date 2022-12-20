(function() {
// capture elements
var $redEl = document.getElementById('red');
var $yellowEl = document.getElementById('yellow');
var $greenEl = document.getElementById('green');

// constance
var signalData = {
    red: {
        class: 'red',
        duration: 4000,
    },
    yellow: {
        class: 'yellow',
        duration: 2000,
    },
    green: {
        class: 'green',
        duration: 1000,
    }
}

function clear() {
    $redEl.style.backgroundColor = "black";
    $yellowEl.style.backgroundColor = "black";
    $greenEl.style.backgroundColor = "black";
}

function displayRed() {
    clear();
    $redEl.style.backgroundColor = "red";
    return setTimeout(displayYellow, signalData.red.duration)
}

function displayYellow() {
    clear();
    $yellowEl.style.backgroundColor = "yellow";
    return setTimeout(displayGreen, signalData.yellow.duration)
}

function displayGreen() {
 clear();
 $greenEl.style.backgroundColor = "green";
 return setTimeout(displayRed, signalData.green.duration);
}

function init() {
    displayGreen();
}

init();

})(); //iffi