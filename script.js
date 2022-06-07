const red = document.querySelector('#red');
const yellow = document.querySelector('#yellow');
const blue = document.querySelector('#blue');
const orange = document.querySelector('#orange');

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