function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	var maximo=110;
	var minimo=1;

	numero=Math.round(Math.random()*(maximo-minimo)+minimo);

	if(numero<=10){
		alert("Su número es " + numero);	
	} else{
		alert("Su número no esta en el rango");
	}
		

}//FIN DE LA FUNCIÓN