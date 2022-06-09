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
// const timerBtn = document.querySelector('.timerBtn');
// timerBtn.addEventListener('click', timer);

/**
 * I want to try, and change the timer to work no matter the sqaure that is clicked. 
 * I'll add the squares of course.
 * function(e) gives info about what was clicked, so i think I might be able to get the
 * id or class of a button, and then use a switch(e) statement to check the attribute, and
 * run the right one.
 */

// function timer() {
//     let timerStart = +prompt("How long is the countdown(seconds)", 5);
//     let sec = timerStart;
//     const redTimer = document.querySelector('.redTimer');
//     let timer = setInterval( () => {
//         console.log(sec);
//         sec--;
//         if (sec <= 0 && redTimer.classList.toggle(!'red')) {
//             redTimer.src = "img/blue.jpeg";
//             sec = timerStart;
//         } else if (sec <= 0) {
//             redTimer.src = "img/red.jpeg";
//             sec = timerStart;
//         }
//     }, 1000);
// }

const redTimer = document.querySelector('.redTimer');
redTimer.addEventListener('click', timer);
const yellowTimer = document.querySelector('.yellowTimer');
const blueTimer = document.querySelector('.blueTimer');
const orangeTimer = document.querySelector('.orangeTimer');
yellowTimer.addEventListener('click', timer);


function timer(e) {
    const classList = e.target.classList;
    let timerStart = +prompt("How long before the square change color?", 3);
    let sec = timerStart;

    let timer = setInterval( () => {
        sec--;
        console.log(sec);
        switch(sec <= 0) {
            case classList.contains('redTimer'):
                if (sec <= 0 && redTimer.classList.toggle(!'red')) {
                    redTimer.src = "img/blue.jpeg";
                    sec = timerStart;
                } else if (sec <= 0) {
                    redTimer.src = "img/red.jpeg";
                    sec = timerStart
                }
                break;
            case classList.contains('yellowTimer'):
                if (yellowTimer.classList.toggle('yellow')) {
                    yellowTimer.src = "img/orange.jpeg";
                    sec = timerStart;
                } else {
                    yellowTimer.src = "img/yellow.jpeg";
                    sec = timerStart;
                }
                break;
        }
    }, 1000);
}