

//create variables
var f = document.getElementById('focus');
var b = document.getElementById('break');
var s = document.getElementById('starttimer');

var bgSelect = document.getElementById('background');
var cond = document.getElementById('timerName');
var message = document.getElementById('message');

var messageType = [
    "Take a moment to breathe.", 
    "Drink some water.", 
    "Don't go on your phone", 
    "Breathe in and out",
    "Stretch for a second now!"
];

var timerDisplay = document.getElementById('numbers');


var checkTimer;
var timerType;
s.value = "falseF";

bgSelect.classList.add("focusBg");
bgSelect.classList.add("transition");


// function rewrite() {
//     bgSelect.setAttribute(focusBg);
// }

function addFocus() {
    bgSelect.classList.remove("breakBg");
    bgSelect.classList.remove("addgradient");
    s.value = "falseF";
    clearInterval(checkTimer);
    //recalls the buttons back
        f.style.display = 'inline-block';
        b.style.display = 'inline-block';
        s.style.display = 'block';
    timerDisplay.style.display = 'block';
        document.getElementById("minutes").innerHTML = "25";
        document.getElementById("seconds").innerHTML = "00";
    ftotalSeconds = 10;
}

function addBreak() {
    // bgSelect.classList.add("opacitize");
    bgSelect.classList.add("breakBg");
    bgSelect.classList.remove("addgradient");
    s.value = "falseBr";
    clearInterval(checkTimer);
        f.style.display = 'inline-block';
        b.style.display = 'inline-block';
        s.style.display = 'block';
    document.getElementById("minutes").innerHTML = "5";
    document.getElementById("seconds").innerHTML = "00";
    btotalSeconds = 5;
}

//functions that starts interval checks for timers 
function startFocTimer () {
    checkTimer = setInterval(focusTimer, 1000);
}

function startBrkTimer () {
    checkTimer = setInterval(breakTimer, 1000);
}

f.onclick = function() {
    addFocus();
}

b.onclick = function() {
    addBreak();
}

s.onclick = function() {
    switch (s.value) {
        case "falseF":
                f.style.display = 'none';
                b.style.display = 'none';
                s.value="trueF";
            startFocTimer();
                    bgSelect.classList.add("addgradient");
                    console.log("Hello, it works");
                    cond.innerHTML = "Pause";
            break;

        case "trueF":
            s.value="falseF";
            clearInterval(checkTimer);
                bgSelect.classList.remove("addgradient");
                console.log("Hello, it's running"); 
                cond.innerHTML = "Start";
            break;

        case "falseBr":
            startBrkTimer();
            message.style.display = 'block';
            let randomMsg = Math.floor(Math.random() * 5);
            message.innerHTML = messageType[randomMsg];
                bgSelect.classList.add("addgradient");
                console.log("Hello, it works");
                cond.innerHTML = "Pause";
                    f.style.display = 'none';
                    b.style.display = 'none';
                    s.style.display = 'none';
                    timerDisplay.style.display = 'none';
            break;
    }
}
//focus timer

var ftotalSeconds = 10; //store the start time in a variable - 60 seconds equals 1 minutes
var fcurrentSeconds;

function focusTimer() {
    ftotalSeconds--; 
    document.getElementById("minutes").innerHTML = Math.floor(ftotalSeconds/60);
    fcurrentSeconds = Math.floor(ftotalSeconds % 60);

        if (fcurrentSeconds < 10) {
            document.getElementById("seconds").innerHTML = "0" + String(fcurrentSeconds);
        } else {
            document.getElementById("seconds").innerHTML = fcurrentSeconds;
        }

        if (ftotalSeconds < 1) {
            document.getElementById("minutes").innerHTML = "0";
            document.getElementById("seconds").innerHTML = "00";
            clearInterval(checkTimer); 
            //after it stops, it adds transitions
            console.log("it's working as usual"); 
            cond.innerHTML = "Start";
            timerType = setTimeout(addBreak,2000);
        }
    }

//break timer
//store the start time in a variable - 60 seconds equals 1 minutes
var btotalSeconds;
var bcurrentSeconds;

function breakTimer() {
    btotalSeconds--; 
    bcurrentSeconds = Math.floor(btotalSeconds % 60);

        if (btotalSeconds < 1) {
            clearInterval(checkTimer); 
            //after it stops
                console.log("it works!");
                cond.innerHTML = "Start";
            timerType= setTimeout(addFocus,2000);

            fadeMsg= setTimeout(() => {
                message.style.display = 'none';
            }, 2000); 
        }
    }
    

