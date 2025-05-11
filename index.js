//Calculator Program

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input; // Appends the input to the current display value
}

function clearDisplay(){
    display.value = ""; // Clears the display
}

function calculate(){
    try {
        display.value = eval(display.value); // Evaluates the expression
    } 
    catch (error) {
        display.value = 'Error!';
    }
}
