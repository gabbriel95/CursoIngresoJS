/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var aumento;
	var resultado;
	var sueldoInt;

	sueldo=txtIdSueldo.value;
	sueldoInt = parseInt(sueldo);

	aumento= 10*sueldoInt / 100;
	

	resultado = sueldoInt+aumento;
	

	txtIdResultado.value = resultado;




}
