function mostrar()
{
	var numero;
	var contadorDivisores=0;

	numero=parseInt(prompt("Ingrese un numero"));

	for(let i=1; i<=numero;i++){
		if(numero%i==0){
			contadorDivisores++;
			console.log(i);
		}
	}

	console.log("Divisores encontrados "+contadorDivisores); 
}//FIN DE LA FUNCIÓN