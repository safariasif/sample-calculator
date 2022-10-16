
function data(val) {
    calc.display.value += val;
}

function C() {
    calc.display.value = calc.display.value.slice(0, -1);
}

function Ac() {
    calc.display.value = "";
}

function Equal() {
    calc.display.value = eval(calc.display.value);
}