// let display = document.getElementById("screen")

let screen =""
function appendCharacter(number) {
    screen += number;
    updateDisplay();
}
function clearResult() {
    screen = ""
    updateDisplay()
}

function deleteCharacter() {
    // screen = document.getElementById('screen').value
    screen = document.getElementById('screen').value.slice(0, -1)
    updateDisplay();
}

function calculateResult() {
    // try {
        let calculate = eval(screen);
        screen = calculate.toString();
        updateDisplay()
    // } catch (error) {
    //     screen = "Error";
    //     updateDisplay();
    // }
}


function updateDisplay() {
    document.getElementById("screen").value = screen;
}