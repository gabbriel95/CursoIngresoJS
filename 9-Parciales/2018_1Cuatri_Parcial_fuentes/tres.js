function mostrar()
{
    var precio;
    var precioInt
    var descuento;
    var descuentoInt;
    var descuentoFinal;

    precio=prompt("Coloque aquí el precio del producto ");
    precioInt=parseInt(precio);

    descuento= prompt("Coloque aquí el porcentaje de descuento ");
    descuentoInt=parseInt(descuento);

    descuentoFinal=descuentoInt*precioInt/100;

    elPrecioFinal.value=precio-descuentoFinal;
}
