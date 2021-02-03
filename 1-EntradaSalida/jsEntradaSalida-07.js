/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var NumeroUno;
	var NumeroDos;
	var Resultado;

	NumeroUno = txtIdNumeroUno.value;
	NumeroDos = txtIdNumeroDos.value;

	NumeroUno=parseInt(NumeroUno);
	NumeroDos=parseInt(NumeroDos);

	Resultado = NumeroUno + NumeroDos;
	
	alert("La suma entre " + NumeroUno + " y " + NumeroDos + " es " + Resultado);	
}

function restar()
{
	var NumeroUno;
	var NumeroDos;
	var Resultado;

	NumeroUno = txtIdNumeroUno.value;
	NumeroDos = txtIdNumeroDos.value;

	NumeroUno=parseInt(NumeroUno);
	NumeroDos=parseInt(NumeroDos);

	Resultado = NumeroUno - NumeroDos;
	
	alert("La resta entre " + NumeroUno + " y " + NumeroDos + " es " + Resultado);
	
}

function multiplicar()
{ 
	var NumeroUno;
	var NumeroDos;
	var Resultado;

	NumeroUno = txtIdNumeroUno.value;
	NumeroDos = txtIdNumeroDos.value;

	NumeroUno=parseInt(NumeroUno);
	NumeroDos=parseInt(NumeroDos);

	Resultado = NumeroUno * NumeroDos;
	
	alert("La multiplicación entre " + NumeroUno + " y " + NumeroDos + " es " + Resultado);
}

function dividir()
{
	var NumeroUno;
	var NumeroDos;
	var Resultado;

	NumeroUno = txtIdNumeroUno.value;
	NumeroDos = txtIdNumeroDos.value;

	NumeroUno=parseInt(NumeroUno);
	NumeroDos=parseInt(NumeroDos);

	Resultado = NumeroUno / NumeroDos;
	
	alert("La división entre " + NumeroUno + " y " + NumeroDos + " es " + Resultado);
}