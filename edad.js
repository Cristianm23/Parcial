function edad() {
    let dia, mes, anio;
    do {
        dia = parseInt(document.getElementById('dia').value);
        mes = parseInt(document.getElementById('mes').value);
        anio = parseInt(document.getElementById('anio').value);

        if (isNaN(dia) || isNaN(mes) || isNaN(anio) || 
            dia < 1 || dia > 31 || mes < 1 || mes > 12 || 
            anio > new Date().getFullYear()) {
            alert("Ingrese una fecha válida (día: 1-31, mes: 1-12, año: no mayor que el actual).");
        }
    } while (isNaN(dia) || isNaN(mes) || isNaN(anio) || 
             dia < 1 || dia > 31 || mes < 1 || mes > 12 || 
             anio > new Date().getFullYear());

    const fechaActual = new Date();
    const fechaNacimiento = new Date(anio, mes - 1, dia); 

    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

    if (fechaActual < new Date(fechaNacimiento.setFullYear(fechaNacimiento.getFullYear() + 1))) {
        edad--;
    }

    document.getElementById('resultado').innerText = `Tu edad es: ${edad} años.`;
}