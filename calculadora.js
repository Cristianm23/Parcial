function calcular() {
    let a, b, c, sum, res, multi;
    a = parseInt(document.getElementById('numeroA').value);
    b = parseInt(document.getElementById('numeroB').value);
    c = parseInt(document.getElementById('numeroC').value);
    
    
    if (a > 0 && b > 0 && c > 0) {
        sum = a + b + c;
        document.getElementById('resultadoSuma').innerText = 'La suma es: ' + sum;
        res = a - b - c;
        document.getElementById('resultadoResta').innerText = 'La resta es: ' + res;
        multi = a * b * c;
        document.getElementById('resultadoMultiplicacion').innerText = 'La multiplicación es: ' + multi;
    } else {
        document.getElementById('resultadoSuma').innerText = '';
        document.getElementById('resultadoResta').innerText = '';
        document.getElementById('resultadoMultiplicacion').innerText = '';
        alert('Broder solo números positivos.');
    } }
    