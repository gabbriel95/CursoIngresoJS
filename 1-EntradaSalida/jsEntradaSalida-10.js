/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var descuento;
	var resultado;
	var importeInt;


	importe=txtIdImporte.value;
	importeInt=parseInt(importe);

	descuento= 25*importeInt/100;
	resultado=importeInt-descuento;

	txtIdResultado.value=resultado;

}
