/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//declaramos
	var dato1;
	var dato2;
	var resultado;

	//asignar
	dato1=txtIdNumeroUno.value;
	dato2=txtIdNumeroDos.value;

	//tranformar en enteros
	dato1=parseInt(dato1);
	dato2=parseInt(dato2);

	//realizar operacion aitmetica
	resultado = dato1+dato2;
	alert("la suma es " + resultado);
}
