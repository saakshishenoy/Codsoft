let display = document.getElementById("display");

function appendValue(val) {
    if (display.innerText === "0" || display.innerText === "Error") {
        display.innerText = val;
    } else {
        display.innerText += val;
    }
}

function clearDisplay() {
    display.innerText = "0";
}

function deleteLast() {
    let text = display.innerText;
    if (text.length <= 1 || text === "Error") {
        display.innerText = "0";
    } else {
        display.innerText = text.slice(0, -1);
    }
}

function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = "Error";
    }
}