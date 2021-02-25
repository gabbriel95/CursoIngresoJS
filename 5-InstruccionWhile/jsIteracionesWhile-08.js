/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var respuesta;//b
	var sumaPositivos;//b
	var multiplicacionNegativos;//b
	var numeros;//b
	var flag=0;

	sumaPositivos=0;//b
	multiplicacionNegativos=1;//b 

	do{
		numeros=parseInt(prompt("Ingrese un numero positivo o negativo"));

		if(numeros>=0){
			sumaPositivos=sumaPositivos+numeros;
		}else{
			flag=1;
			multiplicacionNegativos=multiplicacionNegativos*numeros;
		}

		respuesta=confirm("¿Desea agregar otro numero?");

	} while(respuesta);

	if(flag==0){
		multiplicacionNegativos=0;
	}
	document.getElementById("txtIdSuma").value=sumaPositivos;
	document.getElementById("txtIdProducto").value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN