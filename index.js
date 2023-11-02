let input = document.getElementById("input");

function number(num) {
    input.value += num;
}

function operator(operator) {
    input.value += operator;
}

function clearResult() {
    input.value = "";
}

function decimal() {
    if (!input.value.include(".")) {
        input.value += ".";
    }
}

function calculate() {
    let a = input.value;
    a = a.replace("%", "/100*");
    input.value = eval(a);
}
