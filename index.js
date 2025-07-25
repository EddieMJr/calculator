const equal = document.getElementById('buttonEqual');
const clear = document.getElementById('buttonClear');
const screen = document.getElementById('screen');

//puts numbers and operators on the screen
function addToScreen(value) {
    screen.append(value);
    console.log(screen.value);
}

//clears the screen
function clearScreen(value) {
    //empties the screen of whatever is on it
    screen.textContent='';
    // shows the screen is empty
    console.log(screen.value);
}

//calculates the math and gives the answer
function equateMath(value) {
    try {
        // evaluates the expression in the screen
        screen.textContent = eval(screen.textContent);
        
        // shows error message if the result isn't a number
        if (screen.textContent === 'NaN' || screen.textContent === 'Infinity' || screen.textContent === '') {
            screen.textContent = 'ERROR!';
        }
        // shows error if theres a syntax error
    } catch (error) {
        screen.textContent = 'ERROR!';
    }
}