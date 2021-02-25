/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;//b
	var numeros;//b
	var acumuladorPositivos=0;//b
	var acumuladorNegativos=0;//b
	var contadorPositivos=0;//b
	var contadorNegativos=0;//b
	var contadorCeros=0;//b
	var contadorPares=0;//b
	var promedioPositivos=0;//b
	var promedioNegativos=0;//b
	var diferencia;//b

	do{
		numeros=parseInt(prompt("Ingrese un numero"));

		if(numeros<0){
			acumuladorNegativos=acumuladorNegativos+numeros;
			contadorNegativos++;
		}
		else if(numeros>0){
			acumuladorPositivos=acumuladorPositivos+numeros;
			contadorPositivos++;
		}
		else{
			contadorCeros++;
		}

		if(numeros % 2 == 0){
			contadorPares++;
		}

		respuesta=confirm("Quiere ingresar otro numero?");
	}while(respuesta);

	if(contadorPositivos>0){  
	promedioPositivos = acumuladorPositivos / contadorPositivos;
	}
	if(contadorNegativos>0){  
	promedioNegativos = acumuladorNegativos / contadorNegativos;
    }


	diferencia = contadorPositivos - contadorNegativos;


	console.log("El acumulado de los negativos es " + acumuladorNegativos);//
	console.log("El acumulado de los positivos es " + acumuladorPositivos);//
	console.log("La cantidad de numeros positivos ingresados es " + contadorPositivos);//
	console.log("La cantidad de numeros negativos ingresados es " + contadorNegativos);//
	console.log("La cantidad de ceros ingresados es " + contadorCeros);//
	console.log("La cantidad de numeros pares ingresados es " + contadorPares);//
	console.log("El promedio de los numeros positivos es "+ promedioPositivos);
	console.log("El promedio de los numeros negativos es "+ promedioNegativos);
	console.log("La diferencia entre positivos y negativos es " + diferencia);

}


