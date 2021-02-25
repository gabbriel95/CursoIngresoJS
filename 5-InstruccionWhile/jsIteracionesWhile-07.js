/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numeros;
	contador=0;
	acumulador=0;

	do{
		numeros=parseInt(prompt("Ingrese un numero"));
		acumulador=acumulador+numeros;
		respuesta=confirm("¿Desea continuar agregando numeros?");
		contador++;
		
	}while(respuesta);

	

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN