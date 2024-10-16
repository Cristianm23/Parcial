function calcularDescuento() {
    const montoCompra = parseFloat(document.getElementById('montoCompra').value);
    
    if (isNaN(montoCompra) || montoCompra < 0) {
        alert("Por favor, ingrese un monto válido.");
        return;
    }

    let descuento = 0;
    let montoFinal;

    if (montoCompra > 100000) {
        descuento = montoCompra * 0.20;
    }

    montoFinal = montoCompra - descuento;

    document.getElementById('resultadoSinDescuento').innerText = `Monto sin descuento: $${montoCompra.toFixed(2)}`;
    document.getElementById('resultadoConDescuento').innerText = `Monto a pagar con descuento: $${montoFinal.toFixed(2)}`;
}
