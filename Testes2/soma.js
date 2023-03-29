var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var s = document.getElementById("result");

function calcula() {
    var resultado = n1.valueAsNumber + n2.valueAsNumber;
    s.textContent = resultado;
}


