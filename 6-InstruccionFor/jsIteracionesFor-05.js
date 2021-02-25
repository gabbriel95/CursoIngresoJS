function mostrar()
{
	var numero;

	for(;;){
		var numero=parseInt(prompt("Ingrese un numero"));
		if(numero==9){
			break;
		}
		console.log("Usted a ingresado " + numero);
	}

}//FIN DE LA FUNCIÓN