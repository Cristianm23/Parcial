function calcular() {
let a, b, sum, multi;
a = parseInt(document.getElementById('numeroA').value);
b = parseInt(document.getElementById('numeroB').value);


if (a > 0 && b > 0) {
    sum = a + b;
    document.getElementById('resultadoSuma').innerText = 'La suma es: ' + sum;
    multi = a * b;
    document.getElementById('resultadoMultiplicacion').innerText = 'La multiplicación es: ' + multi;
} else {
    document.getElementById('resultadoSuma').innerText = '';
                document.getElementById('resultadoMultiplicacion').innerText = '';
                alert('Broder solo números positivos.');
} }
