const red = document.querySelector('#red');
const yellow = document.querySelector('#yellow');
const blue = document.querySelector('#blue');
const orange = document.querySelector('#orange');

const redChange = document.querySelector('.redChange');
const yellowChange = document.querySelector('.yellowChange');
const blueChange = document.querySelector('.blueChange');
const orangeChange = document.querySelector('.orangeChange');
let toggle = true;

red.addEventListener('click', () => {
    alert("You clicked on the red square");
});

yellow.addEventListener('click', () => {
    alert("You clicked on the yellow square");
});

blue.addEventListener('click', () => {
    alert("You clicked on the blue square");
});

orange.addEventListener('click', () => {
    alert("You clicked on the orange square");
});

redChange.addEventListener('click', () => {
    // toggle = !toggle;
    // if(toggle) {
    //     (redChange.src = "img/red.jpeg"); 
    // } else {
    //     redChange.src = "img/blue.jpeg";
    // }
    if (redChange.classList.toggle('red')) {
        redChange.src = "img/blue.jpeg";
    } else {
        redChange.src = "img/red.jpeg";
    }
});

yellowChange.addEventListener('click', () => {
    if (yellowChange.classList.toggle('yellow')) {
        yellowChange.src = "img/orange.jpeg";
    } else {
        yellowChange.src = "img/yellow.jpeg";
    }
});

blueChange.addEventListener('click', () => {
    if (blueChange.classList.toggle('blue')) {
        blueChange.src = "img/red.jpeg";
     } else {
         blueChange.src = "img/blue.jpeg";
     }
});

orangeChange.addEventListener('click', () => {
    if (orangeChange.classList.toggle('orange')) {
        orangeChange.src = "img/yellow.jpeg";
    } else {
        orangeChange.src = "img/orange.jpeg";
    }
});

/*Dealing with the timer thing*/
const timerBtn = document.querySelector('.timerBtn');
timerBtn.addEventListener('click', timer);



function timer() {
    let sec = 5;
    const redTimer = document.querySelector('redTimer');
    let timer = setInterval( () => {
        sec--;
        if (sec < 0 && redTimer.classList.toggle('red')) {
            redTimer.src = "img/blue.jpeg";
            sec = 5;
        } else if (sec < 0) {
            redTimer.src = "img/red.jpeg";
            sec = 5;
        }
    }, 1000);
}