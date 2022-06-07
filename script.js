const red = document.querySelector('#red');
const yellow = document.querySelector('#yellow');
const blue = document.querySelector('#blue');
const orange = document.querySelector('#orange');

const redChange = document.querySelector('.redChange');
const yellowChange = document.querySelector('#yellowChange');
const blueChange = document.querySelector('#blueChange');
const orangeChange = document.querySelector('#orangeChange');
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
})

