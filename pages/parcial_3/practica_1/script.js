function sumar(){
    let numUno = parseFloat(document.getElementById("numeroUno").value);
    let numDos = parseFloat(document.getElementById("numeroDos").value);
    let result = numUno + numDos;
    document.getElementById("resultado").innerHTML = result;
}
function restar(){
    let numUno = parseFloat(document.getElementById("numeroUno").value);
    let numDos = parseFloat(document.getElementById("numeroDos").value);
    let result = numUno - numDos;
    document.getElementById("resultado").innerHTML = result;
}
function multiplicar(){
    let numUno = parseFloat(document.getElementById("numeroUno").value);
    let numDos = parseFloat(document.getElementById("numeroDos").value);
    let result = numUno * numDos;
    document.getElementById("resultado").innerHTML = result;
}
function dividir(){
    let numUno = parseFloat(document.getElementById("numeroUno").value);
    let numDos = parseFloat(document.getElementById("numeroDos").value);
    let result = numUno / numDos;
    document.getElementById("resultado").innerHTML = result;
}