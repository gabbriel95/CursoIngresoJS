/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioProductoUno
    var precioProductoDos
    var precioProductoTres
    var precioProductoUnoInt;
    var precioProductoDosInt;
    var precioProductoTresInt;
    var sumaTotal

    precioProductoUno=txtIdPrecioUno.value;
    precioProductoDos=txtIdPrecioDos.value;
    precioProductoTres=txtIdPrecioTres.value;

    precioProductoUnoInt=parseInt(precioProductoUno);
    precioProductoDosInt=parseInt(precioProductoDos);
    precioProductoTresInt=parseInt(precioProductoTres);

    sumaTotal=precioProductoUnoInt+precioProductoDosInt+precioProductoTresInt;

    alert("El precio total de sus productos es " + sumaTotal + " $")

}
function Promedio () 
{
    var precioProductoUno;
    var precioProductoDos;
    var precioProductoTres;
    var suma;
    var promedio;

    precioProductoUno=parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioProductoDos=parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioProductoTres=parseFloat(document.getElementById("txtIdPrecioTres").value);

    suma= precioProductoUno+precioProductoDos+precioProductoTres;
    promedio=suma/3;
    promedio=promedio.toFixed(2);

    alert("El coste promedio de sus productos es " + promedio + " $");

	
}
function PrecioFinal () 
{
    var precioProductoUno;
    var precioProductoDos;
    var precioProductoTres;
    var precioProductoUnoInt;
    var precioProductoDosInt;
    var precioProductoTresInt;
    var precioFinalSinIva;
    var precioFinalConIva;
    var iva21;

    precioProductoUno=txtIdPrecioUno.value;
    precioProductoDos=txtIdPrecioDos.value;
    precioProductoTres=txtIdPrecioTres.value;

    precioProductoUnoInt=parseInt(precioProductoUno);
    precioProductoDosInt=parseInt(precioProductoDos);
    precioProductoTresInt=parseInt(precioProductoTres)

    precioFinalSinIva=precioProductoUnoInt+precioProductoDosInt+precioProductoTresInt;
    iva21=(21*precioFinalSinIva)/100;
    precioFinalConIva=precioFinalSinIva+iva21;
   
    alert("El precio final con iva 21% es " + precioFinalConIva);
	
}