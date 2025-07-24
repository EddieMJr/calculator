const equal = document.getElementById('buttonEqual');
const clear = document.getElementById('buttonClear');
const screen = document.getElementById('screen');

function addToScreen(value) {
    screen.append(value);
    console.log(screen.value);
}

function clearScreen(value) {
    screen.textContent='';
    console.log(screen.value);
}

function equateMath(value) {
    screen.textContent = eval(screen.textContent);
    console.log(screen.value);
}